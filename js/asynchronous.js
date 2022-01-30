const user = [
    {
      id: 1,
      name: 'A',
      age: 44
    },
    {
      id: 2,
      name: 'B',
      age: 30
    },
    {
      id: 3,
      name: 'C',
      age: 22
    },
    {
      id: 4,
      name: 'D',
      age: 49
    },
  ];
  
  // function getuserbyid(id,cb){
  //   console.log('Starting oper...');
  
  //   //simulate
  //   setTimeout(() => {
  //     console.log('Finding user...');
  //     const use = user.find((user) => user.id === id);
  //     console.log('Opera end...');
  
  //     if(use) {
  //       cb(null, user);
  //     }else{
  //       cb('User not found',null);
  //     }
  
  //   },1500);
  // }
  
  // getuserbyid(1,(error, user) => console.log(user));
  
  // function getuserbyid(id){
  //   return new Promise((resolve, reject) => {
  //     console.log('Starting oper...');
  
  //   //simulate
  //   setTimeout(() => {
  //     console.log('Finding user...');
  //     const use = user.find((user) => user.id === id);
  //     console.log('Opera end...');
  
  //     if(use) {
  //       resolve(use);
  //     }else{
  //       reject('User not found');
  //     }
  
  //   },1500);
  //   });
    
  // }
  
  // getuserbyid(3)
  //   .then((user) => console.log(user));
  //   .catch((user) => console.log(error));
  
  async function getuserbyid(id){
    return new Promise((resolve, reject) => {
      console.log('Starting oper...');
  
    //simulate
    setTimeout(() => {
      console.log('Finding user...');
      const use = user.find((user) => user.id === id);
      console.log('Opera end...');
  
      if(use) {
        resolve(use);
      }else{
        reject('User not found');
      }
  
    },1500);
    });
  }
  
  (async function(){
    try{
      const user = await getuserbyid(2);
      console.log(user);
    }catch(error){
      console.log(error);
    }
  })();