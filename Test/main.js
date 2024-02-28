const urlProduct = 'http://localhost:3000/products';

const tbody = document.querySelector('tbody') || document.createElement('div');
const content = document.querySelector('.content') || document.createElement('div');

// List Product
const listProduct = function (){
    fetch(urlProduct).then(response => response.json())
    .then(data => {
        const html = data.map(p => {
            return /*html*/`<tr>
            <th scope="row">${p.id}</th>
            <td>${p.name}</td>
            <td>${p.price}</td>
            <td>
            <button type="button" class="btn btn-danger btn-delete" data-id="${p.id}">Xóa</button>
            <button type="button" class="btn btn-secondary btn-update" data-id="${p.id}">Sửa</button>
            </td>
          </tr>`
        }).join('');
        tbody.innerHTML = html;
        const btnDel = document.querySelectorAll('.btn-delete');
        for (const btn of btnDel) {
            btn.addEventListener('click', function(){
                if(confirm(`Bạn có muốn xóa không?`)){
                    removeProduct(btn.dataset.id);
                }
            })            
        }
        const btnUpdate = document.querySelectorAll('.btn-update');
        for (const btn of btnUpdate) {
            btn.addEventListener('click', function (){
                fetch(`${urlProduct}/${btn.dataset.id}`)
                .then(response => response.json())
                .then((data) => {
                    content.innerHTML = /*html*/ `
                    <form action="" id="form-update">
                        <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon1">Tên sản phẩm</span>
                          <input type="text" class="form-control" value="${data.name}" id="pname" placeholder="Nhập tên sản phẩm" aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                        <p class="text-danger error-name"></p>
                        <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon1">Giá sản phẩm</span>
                          <input type="text" class="form-control" value="${data.price}" id="pprice" placeholder="Nhập giá sản phẩm" aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                        <p class="text-danger error-price"></p>
                        <button type="submit" class="btn btn-success add-submit">Sửa</button>
                      </form>
                `;
        const formUpdate = document.getElementById('form-update');
        const inpName = document.getElementById('pname');
        const inpPrice = document.querySelector('#pprice');

        formUpdate.addEventListener('submit', function(e){
            e.preventDefault();
            if(inpName.value == ""){
                 document.querySelector('.error-name').innerText = `Tên sản phẩm không được để trống`;
                inpName.focus();
                return false;
            }else if(inpPrice.value == ""){
                document.querySelector('.error-price').innerText = `Giá sản phẩm không được để trống`;
                inpName.focus();
                return false;
            }else if(isNaN(Number(inpPrice.value))){
                document.querySelector('.error-price').innerText = `Giá sản phẩm phải là số`;
                inpName.focus();
                return false;
            }else if(Number(inpPrice.value) <= 0){
                document.querySelector('.error-price').innerText = `Giá sản phẩm phải lớn hơn 0`;
                inpName.focus();
                return false;
            }
        const newData = {
            id: btn.dataset.id,
            name: inpName.value,
            price: inpPrice.value,
        }
        updateProduct(btn.dataset.id, newData);
        });
                })
                .catch(err => console.log(err));
               
            })
        }
    })
    .catch(err => console.log(err));
}
listProduct();
const btnUpdate = document.querySelectorAll('.btn-update');
console.log(btnUpdate);
const removeProduct = function(id){
    fetch(`${urlProduct}/${id}`,{
        method:'DELETE'
    }).then(response => response.json())
    .then(() => {
        alert('Đã xóa');
    })
    .catch(err => console.log(err));
}







const updateProduct = function(id,data){
    
    fetch(`${urlProduct}/${id}`,{
        method:'PUT',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(() =>{
        alert(`Đã sửa ${data.name}`);
    })
    .catch(err => console.log(err));
}
// Layout add
const layoutAdd = function(){
    const btnAdd = document.querySelector('.btn-add') || document.createElement('div');
    btnAdd.addEventListener('click', function(){
        content.innerHTML = /*html*/ `
            <form action="" id="form-add">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">Tên sản phẩm</span>
                  <input type="text" class="form-control" id="pname" placeholder="Nhập tên sản phẩm" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <p class="text-danger error-name"></p>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">Giá sản phẩm</span>
                  <input type="text" class="form-control" id="pprice" placeholder="Nhập giá sản phẩm" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <p class="text-danger error-price"></p>
                <button type="submit" class="btn btn-success add-submit">Thêm mới</button>
              </form>
        `;
        validateAdd();   
    })
    
}
layoutAdd();

// Add product
const validateAdd = function(){
    const formAdd = document.getElementById('form-add');
    const inpName = document.getElementById('pname');
    const inpPrice = document.querySelector('#pprice');

    formAdd.addEventListener('submit', function(e){
        e.preventDefault();
        if(inpName.value == ""){
            document.querySelector('.error-name').innerText = `Tên sản phẩm không được để trống`;
            inpName.focus();
            return false;
        }else if(inpPrice.value == ""){
            document.querySelector('.error-price').innerText = `Giá sản phẩm không được để trống`;
            inpName.focus();
            return false;
        }else if(isNaN(Number(inpPrice.value))){
            document.querySelector('.error-price').innerText = `Giá sản phẩm phải là số`;
            inpName.focus();
            return false;
        }else if(Number(inpPrice.value) <= 0){
            document.querySelector('.error-price').innerText = `Giá sản phẩm phải lớn hơn 0`;
            inpName.focus();
            return false;
        }
        const newData = {
            name: inpName.value,
            price: inpPrice.value,
        }
        addProduct(newData);
        
    })
}



const addProduct = function(data){
    
    fetch(urlProduct,{
        method:'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(() =>{
        alert(`Đã thêm ${data.name}`);
    })
    .catch(err => console.log(err));
}


// login

const userName = document.querySelector('#floatingInput') || document.createElement('div');
const passWord = document.querySelector('#floatingPassword')|| document.createElement('div');
const btnLogin = document.querySelector('.btn-login')|| document.createElement('div');

btnLogin.addEventListener('click',function(e){
    e.preventDefault();
    if(userName.value == ""){
        document.querySelector('.error-username').innerText = `Tên tài khoản không được để trống`;
        userName.focus();
        return false;
    }else if(passWord.value == ""){
        document.querySelector('.error-pass').innerText = `Mật khẩu không được để trống`;
        passWord.focus();
        return false;
    }
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => {
       if(checkLogin(data, userName.value, passWord.value)){
            alert(`Xin chào ${userName.value}`);
        document.location = 'index.html';
       }else{
            alert('Tài khoản hoặc mật khẩu không chính xác');
       }
    })
    .catch(err => console.log(err));
})

const checkLogin = function(data, user, pass){
    return data.some(data => {
        return data.username == user && data.password == pass;
    })
}