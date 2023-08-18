## init git

…or create a new repository on the command line
echo "# redux-ultimate" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/NgoTanPhat-CDTH17PMC/redux-ultimate.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/NgoTanPhat-CDTH17PMC/redux-ultimate.git
git branch -M main
git push -u origin main

…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

## What's Redux?

- Dap ung hieu nang cho du an su dung data realtime

## Why Redux?

- dung cho du an lon
- quan ly duoc noi dung duoc chia se giua cac component voi nhau
- Xin hon ContextAPI

## Tai sao khong dung ContextAPI cuar React

- moi lan contextapi thay doi thi tat ca component bi reRender ne se bi lag

## Cong nghe khi su dung Redux

1. React thuan su dung javascript:

2. reduxjs/tookit su dung typescript cho nhung du an lon

## Redux store

## Redux action:

- La input dau vao cua reducer
- Dung de check hành động của user

## Dispatch + Redux reducer:

- Khai bao tung hanh dong
- Nhúng dispatch vào event handler

//event handle
connst handleIncrease = () => {
// dispatch: fire cái action tại react vào store của redux  
 props.increase()
}

## connect redux stateaction to react component

## useDispatch: mapDispatchToProps

dùng để nhận biết 1 fire của 1 cái event

## useSelector: mapStateToProps

const result: any = useSelector (selector: function, equalityFn?: function)
