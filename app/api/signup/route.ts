import { NextResponse } from 'next/server';
import { addUser } from '@/lib/database';

export async function POST(request: Request) {
  const { firstName, lastName, email, password, phone } = await request.json();

  if (!firstName || !lastName || !email || !password || !phone) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  const newUser = addUser({ firstName, lastName, email, password, phone });

  return NextResponse.json(newUser, { status: 201 });
}
