import {evaluate} from '../src/interpreter/executor/interpret'
import * as code from './helpers/input/variables'
import * as result from './helpers/output/variables'

let ret

describe('evaluate()', () => {
  describe('one var', ()=> {
    it('no assign', () => { 
      ret = evaluate(code.dec_a)
      expect(ret).toEqual(result.one_v)  
    })
    it('no `var`', () =>{
      ret = evaluate(code.no_var)
      expect(ret).toEqual(result.one_v)
    })
    it('with sem', () => {
      ret = evaluate(code.a_sem)
      expect(ret).toEqual(result.
    })
    it('assign num', () => {
      ret = evaluate(code.assign_num)
      expect(ret).toEqual(result.declare_and_assign)
    })
    it('assign str', () => {
      ret = evaluate(code.assign_str)
      expect(ret).toEqual(result.assign_str)
    })
    it(''
  })
})
