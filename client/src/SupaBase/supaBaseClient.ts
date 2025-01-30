import { createClient } from "@supabase/supabase-js";


const supaBaseUrl = 'https://ovpngiqjmjwqsjgwrrph.supabase.co'

const supaBaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92cG5naXFqbWp3cXNqZ3dycnBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxODYzMDAsImV4cCI6MjA1Mzc2MjMwMH0.RL_FT3r-Ok9fn2Mdi9n58lx98EuDQjltvFe3qcJ79n8'

export const supabase = createClient(supaBaseUrl, supaBaseKey)

export const { data, error } = await supabase
    .from('users')
    .select('user_name')

