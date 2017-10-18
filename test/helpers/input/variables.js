// good ones
export const var_declare      = `var a`

export const assign_num       = `var a = 2`

export const dec_then_assign  = `var a
                                 a = 2`

export const assign_str       = `var a
                                 a = 'hello'`

export const assign_b_to_a    = `var a = 4
                                 var b = 'hello'
                                 a = b` 

// bad ones
export const named_is_num     = `var 3`

export const start_with_num   = `var 3hello`

export const named_key_var    = `var var`

export const named_key_if     = `var if`

export const named_key_else   = `var else`

export const named_key_for    = `var for`
