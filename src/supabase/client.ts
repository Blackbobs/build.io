import { createClient } from '@supabase/supabase-js'
// import '../utils/dotenvConfig'

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL or Key is not defined');
  }

export const supabase = createClient(supabaseUrl, supabaseKey)