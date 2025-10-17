import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// File to track used promo codes
const PROMO_FILE = path.join(process.cwd(), 'data', 'promo-codes.json');

// Valid promo codes (Kirk = Dad, Julie = Mom, Ron = Friend)
const VALID_CODES = ['Kirk', 'Julie', 'Ron'];

// Initialize promo file if it doesn't exist
function initPromoFile() {
  const dataDir = path.join(process.cwd(), 'data');

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  if (!fs.existsSync(PROMO_FILE)) {
    fs.writeFileSync(PROMO_FILE, JSON.stringify({ usedCodes: [] }));
  }
}

// Get used codes
function getUsedCodes(): string[] {
  initPromoFile();
  const data = JSON.parse(fs.readFileSync(PROMO_FILE, 'utf-8'));
  return data.usedCodes || [];
}

// Mark code as used
function markCodeAsUsed(code: string) {
  initPromoFile();
  const data = JSON.parse(fs.readFileSync(PROMO_FILE, 'utf-8'));
  if (!data.usedCodes.includes(code)) {
    data.usedCodes.push(code);
    fs.writeFileSync(PROMO_FILE, JSON.stringify(data, null, 2));
  }
}

export async function POST(request: Request) {
  try {
    const { code } = await request.json();

    if (!code) {
      return NextResponse.json({
        valid: false,
        message: 'Please enter a promo code'
      });
    }

    // Case-insensitive check
    const normalizedCode = code.trim();
    const matchingCode = VALID_CODES.find(
      validCode => validCode.toLowerCase() === normalizedCode.toLowerCase()
    );

    if (!matchingCode) {
      return NextResponse.json({
        valid: false,
        message: 'Invalid promo code'
      });
    }

    // Check if already used
    const usedCodes = getUsedCodes();
    if (usedCodes.includes(matchingCode)) {
      return NextResponse.json({
        valid: false,
        message: 'This promo code has already been used'
      });
    }

    // Mark as used
    markCodeAsUsed(matchingCode);

    return NextResponse.json({
      valid: true,
      code: matchingCode,
      message: 'Promo code accepted! You have lifetime free access.'
    });

  } catch (error) {
    console.error('Promo code error:', error);
    return NextResponse.json({
      valid: false,
      message: 'An error occurred. Please try again.'
    }, { status: 500 });
  }
}
