/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email address
  - `subject` (text, not null) — message subject
  - `message` (text, not null) — message body
  - `is_read` (boolean, default false) — tracks whether the message has been read
  - `created_at` (timestamptz, default now()) — when the message was sent

2. Security
- Enable RLS on `contact_messages`.
- Allow anon + authenticated to INSERT (site visitors can submit the contact form).
- No SELECT, UPDATE, or DELETE for anon — only the project owner (via dashboard/service role) can read and manage messages.

3. Notes
- This is a single-tenant portfolio website with no sign-in screen.
- Only INSERT is exposed to the public; reading and managing messages is done through the Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
