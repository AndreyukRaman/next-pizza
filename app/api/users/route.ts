import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Проверяем обязательные поля
    const { fullName, password, email } = body;
    if (!fullName || !password || !email) {
      return NextResponse.json(
        { error: 'fullName, password и email обязательны' },
        { status: 400 },
      );
    }

    // Создаем пользователя
    const user = await prisma.user.create({
      data: {
        fullName,
        password,
        email,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error: unknown) {
    console.error('Ошибка создания пользователя:', error);

    const err = error as Error;

    return NextResponse.json({ error: err.message || 'Ошибка сервера' }, { status: 500 });
  }
}
