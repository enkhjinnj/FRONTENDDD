import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const register = async (req: Request, res: Response): Promise<void> => {
    const { name, email, password } = req.body;
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
        res.status(400).json({ error: "User already exists" });
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: { name, email, password: hashedPassword },
    });

    res.json({
        message: "User registered",
        user: { id: user.id, email: user.email, name: user.name },
    });
};

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        res.status(401).json({ error: "Invalid credentials" });
        return;
    }

    const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
        res.status(401).json({ error: "Invalid credentials" });
        return;
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
        expiresIn: "1h",
    });
    res.json({ token });
};
