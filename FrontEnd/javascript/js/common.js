const helloworld = () => {
    alert('HelloWorld')
}

const moveExample02 = () => {
    location.replace('./example02.html');
}
    // location은 window객체 안에 있는 것.
    // Javasript 3에서 2로 갔다가 2에서 back누르면 3으로 돌아옴.
const back = () => {
    history.back();
}