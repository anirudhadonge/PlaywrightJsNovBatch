/**
 * synchronus
 * asynchronus
 *
 * async await
 */

async function fun1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Function 1 Executed");
      resolve('success')
    }, 5000);
  });
}

async function fun2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Function 2 Executed");
      resolve('success')
    }, 2000);
  });
}

async function fun3() {
    return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Function 3 Executed");
      resolve('success')
    }, 1000);
  });
}

async function fun(){
 await fun1();
 fun2();
 fun3();

}


fun();