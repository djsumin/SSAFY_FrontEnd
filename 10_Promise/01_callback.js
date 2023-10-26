let work = true;

function task(successCallback, failureCallback) {
  //어떠한 작업을 통해 work 라고 하는게 성공/ 실패를 할 것이다.


  if (work) {
    successCallback();
  } else {
    failureCallback();
  }
}

function onTaskSuccess() {
  console.log("작업이 성공하면 이 콜백함수를 실행합니다.");
}

function onTaskFailure() {
  console.log("작업이 실패하면 이 콜백함수를 실행합니다.");
}

task(onTaskSuccess, onTaskFailure);

