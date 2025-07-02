import { NextResponse } from 'next/server';
import { users } from '@/lib/database';

export async function PUT(request: Request) {
  const { id, firstName, lastName, email, phone } = await request.json();

  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex === -1) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  users[userIndex] = { ...users[userIndex], firstName, lastName, email, phone };

  return NextResponse.json(users[userIndex], { status: 200 });
}
