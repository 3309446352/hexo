import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rdbttbgftdysshhnjflw.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkYnR0YmdmdGR5c3NoaG5qZmx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNzAxMjksImV4cCI6MjA3Mzk0NjEyOX0.nsMhJ2yYfMDZ5j2yLRTU6ETnLr-cJvLXp315r02gMHw'

export const supabase = createClient(supabaseUrl, supabaseKey)
