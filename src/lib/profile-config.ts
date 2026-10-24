import { createClient } from '@supabase/supabase-js';
import { defaultMeConfig, type MeConfig } from '@/lib/me-config';

export async function getPublicProfileConfig(): Promise<MeConfig> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return defaultMeConfig;

  try {
    const supabase = createClient(url, anonKey, {
      auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
    });
    const { data, error } = await supabase
      .from('me_config')
      .select('data')
      .eq('key', 'main_config')
      .maybeSingle();
    if (error || !data?.data?.profile || !data.data?.music) return defaultMeConfig;
    return data.data as MeConfig;
  } catch {
    return defaultMeConfig;
  }
}
