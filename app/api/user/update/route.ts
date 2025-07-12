import { NextResponse } from 'next/server';
import { users, updateUser } from '@/lib/database';

export async function PUT(request: Request) {
  const { id, firstName, lastName, email, phone } = await request.json();

  const existingUser = users.find(user => user.id === id);

  if (!existingUser) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  const updatedUser = updateUser({ ...existingUser, firstName, lastName, email, phone });

  if (!updatedUser) {
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }

  return NextResponse.json(updatedUser, { status: 200 });
}
