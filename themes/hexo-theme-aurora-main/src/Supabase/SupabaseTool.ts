import { supabase } from '@/Supabase/Supabase'

class SupabaseTool {
  static GetAllData = async (table: string) => {
    const { data, error } = await supabase.from(table).select('*')
    if (error) {
      console.error('Error fetching data:', error.message)
      return null
    }
    return data
  }

  static InsertData = async (table: string, newData: object) => {
    const { data, error } = await supabase
      .from(table)
      .insert(newData)
      .select()
      .single()
    if (error) {
      console.error('Error inserting data:', error.message)
    }
    return data
  }
  static DeleteData = async (Table: string, KeyName: string, title: string) => {
    const { data, error } = await supabase
      .from(Table)
      .delete()
      .eq(KeyName, title)
    if (error) {
      console.error('Error deleting data:', error.message)
      return null
    }
    return data
  }
  static UpdateData = async (
    table: string,
    condition: object,
    updateFields: object
  ) => {
    const { data, error } = await supabase
      .from(table)
      .update(updateFields)
      .match(condition)
    if (error) {
      console.error('Error deleting data:', error.message)
    }
    return data
  }
  static generateUUID() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID()
    }
    // 回退到手动生成
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = (Math.random() * 16) | 0,
          v = c === 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
      }
    )
  }
}

export default SupabaseTool
