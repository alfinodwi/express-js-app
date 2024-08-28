//import express
const express = require("express");

// Import validationResult from express-validator
const { validationResult } = require("express-validator");

//import bcrypt
const bcrypt = require("bcryptjs");

//import jwt
const jwt = require("jsonwebtoken");

//import prisma  client
const prisma = require("../prisma/client");

//function login
const login = async (req, res) => {
    //periksa hasil validasi
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        //jika ada error, kembalikan error ke user
        return res.status(422).json({
            success: false,
            message: "Validation error",
            errors: errors.array(),
        });
    }

    try {
        //find user
        const user = await prisma.user.findFirst({
            where: {
                email: req.body.email,
            },
            select: {
                id: true,
                name: true,
                email: true,
                password: true,
            },
        });

        //user not found
        if (!user) 
            return res.status(404).json({
                success: false,
                message: "User not found",
            });

        //compare pasword
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        )

        //passwor incorrect
        if (!validPassword)
            return res.status(401).json({
                success: false,
                message: "Invalid password",
            });
        
        //generate token jwt
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        //Destrukture to remove pass from object user
        const { password, ...userWithoutPassword } = user;

        //return response
        res.status(200).send({
            success: true,
            message: "Login successfully",
            data: {
                user: userWithoutPassword,
                token: token,
            },
        });
    } catch {
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
}

module.exports = { login };