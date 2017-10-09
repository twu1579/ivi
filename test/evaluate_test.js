import {evaluate} from '../src/interpreter/executor/interpret'
import * as vars from './helpers/input/variables'
import * as ret from './helpers/output/variables'


describe('evaluate() - variables only', () =>{
  describe('one var', () => {
    const var_a_data = ret.one_var(0, '"a"','""','""')
    test('basic declare', ()=> {
      const res = evaluate(vars.dec_a)
      expect(res).toContainEqual(var_a_data)
    })
    test('declare with sem', () => {
      const res = evaluate(vars.a_sem)
      expect(res).toContainEqual(var_a_data)
    })
  })
})
