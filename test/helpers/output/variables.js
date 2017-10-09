/* Output format

[ LineRep { lineNumber: 0, dataArray: [], consoleOutput: '' },
  LineRep { lineNumber: 15, dataArray: [ [Object] ], consoleOutput: '' } ]

  Object:

{ lineNumber : 2, 
      dataArray : [ {
                        name : a,
                        value : 2
      } ]
      consoleOutput: ""
    }
*/


// good returns
export function one_var(line, name, val, cons){ 
  let ret = '{ "lineNumber":'+ line + 
    ',"dataArray": ['+
    '{ "name" : '+ name + 
    ',"value" : '+ val + 
    ' } ],"consoleOutput": '+ cons +' }'
  
  return JSON.parse(ret)
}

export function no_var(line, cons){ 
  let ret = '{ "lineNumber":'
    + line + 
  ',"dataArray": [],"consoleOutput": "'
    + cons + 
    '" }'
  
  return JSON.parse(ret)
}


export function two_var(line, name, val, cons){ 
  
  let ret = '{ "lineNumber":'+ line + 
    ',"dataArray": ['+
    '{ "name" : "'+ name[0] + 
    '","value" : "'+ val[0] +'"}'+ 
    '{ "name" : "'+ name[1] + 
    '","value" : "'+ val[1] + 
    '],"consoleOutput": "'+ cons +'" }'
  
  return JSON.parse(ret)
}
