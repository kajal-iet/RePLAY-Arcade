export const caesarDocs = [
  {
    title: "Problem Overview",
    content: `
Caesar Cipher is one of the earliest and simplest forms of symmetric encryption. It works by shifting each letter in the plaintext by a fixed number of positions in the alphabet.

The core idea:
Each character is transformed using modular arithmetic.

Let:
P = Plaintext character
C = Ciphertext character
k = Shift key (integer)
Alphabet size = 26

Encryption Formula:
C = (P + k) mod 26

Decryption Formula:
P = (C - k) mod 26

Characters are mapped as:
A → 0
B → 1
...
Z → 25

This implementation is built as a backend-driven cryptographic transformation module using Python and FastAPI. The backend handles encryption and decryption logic while the frontend only renders results.
`
  },

  {
    title: "Character Encoding & Mapping",
    content: `
To apply modular arithmetic, characters must first be converted into numeric form.

In Python:
ord('A') → 65
chr(65) → 'A'

Mapping to 0–25 range:
index = ord(char) - ord('A')

Mapping back:
char = chr(index + ord('A'))

This conversion allows mathematical transformation on characters.

Uppercase and lowercase letters must be handled separately to preserve case integrity.
Non-alphabetic characters (spaces, punctuation) are typically preserved without modification.
`
  },

  {
    title: "Encryption Algorithm (Core Logic)",
    content: `
Step-by-step encryption process:

1. Iterate through each character in input text.
2. Check if character is alphabetic.
3. Convert character to numeric index (0–25).
4. Add shift value.
5. Apply modulo 26 to ensure wrap-around.
6. Convert back to character.
7. Append to result string.

Example:
Plaintext: HELLO
Shift: 3

H → 7 → 10 → K
E → 4 → 7 → H
L → 11 → 14 → O
L → 11 → 14 → O
O → 14 → 17 → R

Result: KHOOR

Implementation:

def encrypt(text, shift):
    result = ""
    shift = shift % 26

    for char in text:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            shifted = (ord(char) - base + shift) % 26
            result += chr(shifted + base)
        else:
            result += char

    return result
`
  },

  {
    title: "Decryption Algorithm",
    content: `
Decryption reverses encryption by subtracting the shift value.

Mathematically:
P = (C - k) mod 26

Instead of writing a separate algorithm, decryption can reuse encryption logic:

def decrypt(text, shift):
    return encrypt(text, -shift)

This works because modular arithmetic preserves inverse symmetry.

Example:
Cipher: KHOOR
Shift: 3

Decrypted: HELLO
`
  },

  {
    title: "Modular Arithmetic & Wrap-Around Behavior",
    content: `
Modulo operation ensures alphabet wrap-around.

Example:
Z = 25
Shift = 3

25 + 3 = 28
28 mod 26 = 2 → C

This guarantees:
- No index overflow
- Alphabet cycles correctly
- Large shifts behave predictably

Optimization:
shift = shift % 26

This prevents unnecessary rotations when shift > 26.
`
  },

  {
    title: "Algorithm Complexity Analysis",
    content: `
Let n = length of input string.

Encryption:
Single pass over text → O(n)

Decryption:
Also O(n)

Space Complexity:
New output string → O(n)

Brute Force Attack:
Trying all 25 shifts → O(26 × n) ≈ O(n)

Because of small key space, Caesar Cipher is cryptographically weak.
`
  },

  {
    title: "Backend API Design",
    content: `
Encrypt Endpoint:
POST /caesar/encrypt

Input:
{
  "text": "HELLO",
  "shift": 3
}

Output:
{
  "cipher": "KHOOR"
}

Decrypt Endpoint:
POST /caesar/decrypt

Input:
{
  "text": "KHOOR",
  "shift": 3
}

Output:
{
  "plaintext": "HELLO"
}

The backend performs all transformations to ensure algorithm integrity and prevent manipulation from frontend.
`
  },

  {
    title: "Security Considerations & Educational Value",
    content: `
Caesar Cipher is vulnerable to:

- Brute force attacks (only 25 possible shifts)
- Frequency analysis
- Known plaintext attacks

However, it is educationally valuable because it demonstrates:

- Symmetric encryption principles
- Modular arithmetic application
- Character encoding systems
- Deterministic transformation logic

Conceptual Pipeline:

Plaintext
   ↓
Character Mapping
   ↓
Modular Shift
   ↓
Ciphertext

This module provides foundational understanding of classical cryptography and prepares learners for more advanced ciphers such as Vigenère and modern block ciphers.
`
  }
];
