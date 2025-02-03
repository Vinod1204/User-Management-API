import supabase from "../config/supabaseClient";

export const getAllUsers = async () => {
  return await supabase.from("users").select("*");
};

export const getUserById = async (id: string) => {
  return await supabase.from("users").select("*").eq("id", id).single();
};

export const createUser = async (name: string, email: string, avatar: string) => {
  return await supabase.from("users").insert([{ name, email }]);
};

export const updateUser = async (id: string, name: string) => {
  return await supabase.from("users").update({ name }).eq("id", id);
};

export const deleteUser = async (id: string) => {
  return await supabase.from("users").delete().eq("id", id);
};
