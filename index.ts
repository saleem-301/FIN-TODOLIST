#! /usr/bin/env node

import inquirer from 'inquirer'

let todolst = [];
let option = true;

while(option)
{
    {
        let slct = await inquirer.prompt
        (
            [
                {
                    name:'lst',
                    type:'list',
                    message : 'What Would You like to Do',
                    choices : ['add','edit','del'],
                }
            ]
        )

        if (slct.lst === 'add')
        {
            let tasks = await inquirer.prompt
            (
                [
                    {
                        name: 'task',
                        type:'input',
                        message:'Write the Element to ADD'
                
                    },
                    {
                        name:'add',
                        type: 'confirm',
                        message:'Do u Want to Add More',
                        default:'true'
                    }
                ]
            )        
            todolst.push(tasks.task)
            console.log(todolst)
            option = tasks.add
        }
        else if (slct.lst === 'edit')
        {

            let tasks = await inquirer.prompt
            (
                [
                    {
                        name: 'elmnt',
                        type:'number',
                        message:'Which Element would you like to edit',
                        
                
                    }
                ]
            )
            console.log(tasks.elmnt)
                    if
                    (tasks.elmnt <= todolst.length && tasks.elmnt > 0)
                    { 
                        let edvals = await inquirer.prompt
                    (
                        [  
                            {
                                name: 'edval',
                                type:'input',
                                message:'Enter the New Value',
                                
                        
                            },
                            {
                                name:'add',
                                type: 'confirm',
                                message:'Do u Want to Add More',
                                default:'true'
                            }
                        ]
                    )
                    todolst[tasks.elmnt-1]= edvals.edval
                    console.log(todolst)
                    option = edvals.add
                }
            else {console.log('Selection is out of range')}

        }
        else if (slct.lst === 'del')
        {
            let tasks = await inquirer.prompt
            (
                
                    {
                        name: 'elmnt',
                        type:'number',
                        message:'Which Element would you like to delete',
                        
                
                    }
            )
            if (tasks.elmnt <= todolst.length && tasks.elmnt > 0)
            { 
                todolst.splice(tasks.elmnt-1,1)
                console.log(todolst);
                let confrm = await inquirer.prompt
                (                    
                    {
                        name:'add',
                        type: 'confirm',
                        message:'Do u Want to Add More',
                        default:'true'
                    }
                )
                option = confrm.add;
            }
            else {console.log('Selection is out of range')}
            
            
        }   
            

    }
}