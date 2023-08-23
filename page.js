console.log('asdf');
let ind = 0;
let ind2 = 0;
let isDraw = false;
let popup123;
let Entry123;
let isLock123;

// async function changeContent(){
//     if (document.defaultView[0]) {
//         if (document.defaultView[0].Entry) {
//             let Entry = document.defaultView[0].Entry;
            
//             // let gcd = (a, c) => c ? gcd(c, a % c) : a;
//             // gcd = gcd(3840, 2160);
//             // const frac = [3840 / gcd, 2160 / gcd],
//             //     stage = document.querySelector("iframe").contentWindow.Entry.stage;
//             // stage.canvas.canvas.width = 3840;
//             // stage.canvas.canvas.height = 2160;
//             // stage.canvas.x = 1920;
//             // stage.canvas.y = 1080;
//             // stage.canvas.scaleX = stage.canvas.scaleY = 8;
//             // stage._app.stage.update();
            
//             if (Entry.variableContainer) {
//                 if (Entry.variableContainer.getVariableByName('isEntry+')) {
//                     if (Entry.variableContainer.getVariableByName('isEntry+').value_ !== 1) {
//                         Entry.variableContainer.getVariableByName('isEntry+').value_ = 1;
//                     }
//                 }
//                 if (Entry.variableContainer.getListByName('+삼각형')) {
//                     ind++;
//                     const waiting = (num) => {
//                         const wrap = document.querySelector('iframe').contentWindow.document.body.querySelector('#entryCanvasWrapper');
//                         const but = document.querySelector('iframe').contentWindow.document.body.querySelector('#entryCanvasWrapper > div > div');
//                         if (but? wrap? !but.classList.contains('entryRemove'): true : true) {
//                             if (num === ind) {
//                                 setTimeout(() => {waiting(num)}, 500);
//                             }
//                             return;
//                         }
//                         if (wrap) {
//                             let newCan;
//                             /**@type {CanvasRenderingContext2D} */
//                             let cv;
//                             if (!popup123 && !document.querySelector('iframe').contentWindow.document.body.querySelector("#entryCanvasWrapper > .tri")) {
//                                 if (newCan) {
//                                     newCan.remove();
//                                 }
//                                 newCan = document.createElement('canvas');
//                                 newCan.width = 640;
//                                 newCan.height = 360;
//                                 newCan.style.width = '100%';
//                                 newCan.style.position = 'absolute';
//                                 newCan.style.transform = 'translateX(-100%)';
//                                 newCan.style.top = '0px';
//                                 newCan.style.left = '100%';
//                                 newCan.style.zIndex = -1;
//                                 newCan.style.pointerEvents = 'none';
//                                 newCan.classList.add('tri');
//                                 wrap.appendChild(newCan);
//                                 cv = newCan.getContext('2d');
//                             }
//                             if (but.classList.contains('entryRemove')) {
//                                 if (!isDraw) {
//                                     let ctx = Entry.canvas_.getContext('2d');
//                                     const drawing = () => {
//                                         isDraw = true;
//                                         if (but.classList.contains('entryRemove')) {
//                                             popup123 = document.querySelector(".entryPopupWindow");
//                                             if (popup123) {
//                                                 if (!popup123.classList.contains('added')) {
//                                                     if (newCan) {
//                                                         newCan.remove();
//                                                     }
//                                                     newCan = document.createElement('canvas');
//                                                     newCan.width = 640;
//                                                     newCan.height = 360;
//                                                     newCan.style.width = '100%';
//                                                     newCan.style.position = 'absolute';
//                                                     newCan.style.transform = 'translateX(-100%)';
//                                                     newCan.style.top = '0px';
//                                                     newCan.style.left = '100%';
//                                                     newCan.style.zIndex = -1;
//                                                     newCan.style.pointerEvents = 'none';
//                                                     newCan.classList.add('tri');
//                                                     popup123.classList.add('added');
//                                                     popup123.appendChild(newCan);
//                                                     cv = newCan.getContext('2d');
//                                                 }
//                                             }
//                                             if (Entry.variableContainer.getListByName('+삼각형').array_.length) {
//                                                 newCan.style.zIndex = 0;
//                                                 cv.clearRect(0, 0, newCan.width, newCan.height);
//                                                 for (let j = 0; j < Entry.variableContainer.getListByName('+삼각형').array_.length; j++) {
//                                                     let v = Entry.variableContainer.getListByName('+삼각형').array_[j];
//                                                     if (v.data === 'clear') {
//                                                         Entry.variableContainer.getListByName('+삼각형').array_.length = 0;
//                                                         cv.clearRect(0, 0, newCan.width, newCan.height);
//                                                     }
//                                                     else {
//                                                         let arr = v.data.split(' ');
//                                                         if (arr.length > 6 && arr.length % 2) {
//                                                             cv.beginPath();
//                                                             cv.moveTo(newCan.width / 2 + (arr[1] / 240 * (newCan.width / 2)), newCan.height / 2 - (arr[2] / 135 * (newCan.height / 2)));
//                                                             for(let i = 3; i < arr.length; i += 2) {
//                                                                 cv.lineTo(newCan.width / 2 + (arr[i] / 240 * (newCan.width / 2)), newCan.height / 2 - (arr[i+1] / 135 * (newCan.height / 2)));
//                                                             }
//                                                             cv.closePath();
//                                                             if (arr[0] === 'clear') {
//                                                                 cv.globalCompositeOperation = 'destination-out';
//                                                                 cv.fillStyle = '#000000';
//                                                                 cv.fill();
//                                                                 cv.globalCompositeOperation = 'source-over';
//                                                             }
//                                                             else {
//                                                                 cv.fillStyle = arr[0];
//                                                                 cv.fill();
//                                                             }
//                                                         }
//                                                     }
//                                                 }
//                                             }
//                                             requestAnimationFrame(drawing);
//                                         }
//                                         else {
//                                             if (newCan.style.zIndex + 1) {
//                                                 cv.clearRect(0, 0, newCan.width, newCan.height);
//                                                 newCan.style.zIndex = -1;
//                                             }
//                                             setTimeout(drawing, 500);
//                                         }
//                                     }
//                                     setTimeout(drawing, 10);
//                                 }
//                             }
//                         }
//                     }
//                     waiting(ind);
//                 }
//                 if (Entry.variableContainer.getListByName('+Lock')) {
//                     ind2++;
//                     const waiting2 = () => {
//                         const wrap = document.querySelector('iframe').contentWindow.document.body.querySelector('#entryCanvasWrapper');
//                         const but = document.querySelector('iframe').contentWindow.document.body.querySelector('#entryCanvasWrapper > div > div');
//                         if (but? wrap? !but.classList.contains('entryRemove'): true : true) {
//                             if (num === ind) {
//                                 setTimeout(() => {waiting2(num)}, 500);
//                             }
//                             return;
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// let targetNode = document.querySelector("body");

// function addObserverIfDesiredNodeAvailable() {
//     targetNode = document.querySelector("body");
//     if(!targetNode) {
//         //The node we need does not exist yet.
//         //Wait 500ms and try again
//         window.setTimeout(addObserverIfDesiredNodeAvailable,1000);
//         return;
//     }
//     const observer = new MutationObserver(changeContent);
//     observer.observe(targetNode, { attributes: true, childList: true, subtree: true });
// }
// addObserverIfDesiredNodeAvailable();

const waitAll = () => {
    if (document.defaultView[0]? document.defaultView[0].Entry? document.querySelector('iframe')? true: false: false: false) {
        Entry123 = document.defaultView[0].Entry;
        if (Entry123.variableContainer) {
            const waiting0 = () => {
                if (Entry123.variableContainer.getVariableByName('isEntry+')) {
                    if (Entry123.variableContainer.getVariableByName('isEntry+').value_ !== 1) {
                        Entry123.variableContainer.getVariableByName('isEntry+').value_ = 1;
                    }
                }
                else {
                    setTimeout(waiting0, 1000);
                    return;
                }
            }
            setTimeout(waiting0, 0);
            if (Entry123.variableContainer.getListByName('+삼각형')) {
                const waiting = () => {
                    const wrap = document.querySelector('iframe').contentWindow.document.body.querySelector('#entryCanvasWrapper');
                    const but = document.querySelector('iframe').contentWindow.document.body.querySelector('#entryCanvasWrapper > div > div');
                    if (but? wrap? !but.classList.contains('entryRemove'): true : true) {
                        setTimeout(waiting, 500);
                        return;
                    }
                    if (wrap) {
                        let newCan;
                        /**@type {CanvasRenderingContext2D} */
                        let cv;
                        if (!popup123 && !document.querySelector('iframe').contentWindow.document.body.querySelector("#entryCanvasWrapper > .tri")) {
                            if (newCan) {
                                newCan.remove();
                            }
                            newCan = document.createElement('canvas');
                            newCan.width = 640;
                            newCan.height = 360;
                            newCan.style.width = '100%';
                            newCan.style.position = 'absolute';
                            newCan.style.transform = 'translateX(-100%)';
                            newCan.style.top = '0px';
                            newCan.style.left = '100%';
                            newCan.style.zIndex = -1;
                            newCan.style.pointerEvents = 'none';
                            newCan.classList.add('tri');
                            wrap.appendChild(newCan);
                            cv = newCan.getContext('2d');
                        }
                        if (but.classList.contains('entryRemove')) {
                            if (!isDraw) {
                                const drawing = () => {
                                    if (Entry123.variableContainer.getVariableByName('isEntry+')) {
                                        if (Entry123.variableContainer.getVariableByName('isEntry+').value_ !== 1) {
                                            Entry123.variableContainer.getVariableByName('isEntry+').value_ = 1;
                                        }
                                    }
                                    isDraw = true;
                                    if (but.classList.contains('entryRemove')) {
                                        popup123 = document.querySelector(".entryPopupWindow");
                                        if (popup123) {
                                            if (!popup123.classList.contains('added')) {
                                                if (newCan) {
                                                    newCan.remove();
                                                }
                                                newCan = document.createElement('canvas');
                                                newCan.width = 640;
                                                newCan.height = 360;
                                                newCan.style.width = '100%';
                                                newCan.style.position = 'absolute';
                                                newCan.style.transform = 'translateX(-100%)';
                                                newCan.style.top = '0px';
                                                newCan.style.left = '100%';
                                                newCan.style.zIndex = -1;
                                                newCan.style.pointerEvents = 'none';
                                                newCan.classList.add('tri');
                                                popup123.classList.add('added');
                                                popup123.appendChild(newCan);
                                                cv = newCan.getContext('2d');
                                            }
                                        }
                                        if (Entry123.variableContainer.getListByName('+삼각형').array_.length) {
                                            newCan.style.zIndex = 0;
                                            cv.clearRect(0, 0, newCan.width, newCan.height);
                                            for (let j = 0; j < Entry123.variableContainer.getListByName('+삼각형').array_.length; j++) {
                                                let v = Entry123.variableContainer.getListByName('+삼각형').array_[j];
                                                if (v.data === 'clear') {
                                                    Entry123.variableContainer.getListByName('+삼각형').array_ = Entry123.variableContainer.getListByName('+삼각형').array_.slice(j + 1);
                                                    cv.clearRect(0, 0, newCan.width, newCan.height);
                                                }
                                                else {
                                                    let arr = v.data.split(' ');
                                                    if (arr.length > 6 && arr.length % 2) {
                                                        cv.beginPath();
                                                        cv.moveTo(newCan.width / 2 + (arr[1] / 240 * (newCan.width / 2)), newCan.height / 2 - (arr[2] / 135 * (newCan.height / 2)));
                                                        for(let i = 3; i < arr.length; i += 2) {
                                                            cv.lineTo(newCan.width / 2 + (arr[i] / 240 * (newCan.width / 2)), newCan.height / 2 - (arr[i+1] / 135 * (newCan.height / 2)));
                                                        }
                                                        cv.closePath();
                                                        if (arr[0] === 'clear') {
                                                            cv.globalCompositeOperation = 'destination-out';
                                                            cv.fillStyle = '#000000';
                                                            cv.fill();
                                                            cv.globalCompositeOperation = 'source-over';
                                                        }
                                                        else {
                                                            cv.fillStyle = arr[0];
                                                            cv.fill();
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        requestAnimationFrame(drawing);
                                    }
                                    else {
                                        if (newCan.style.zIndex + 1) {
                                            cv.clearRect(0, 0, newCan.width, newCan.height);
                                            newCan.style.zIndex = -1;
                                        }
                                        setTimeout(drawing, 500);
                                    }
                                }
                                drawing();
                            }
                        }
                    }
                }
                setTimeout(waiting, 1);
            }
            if (Entry123.variableContainer.getVariableByName('+Lock')) {
                const waiting2 = () => {
                    const wrap = document.querySelector('iframe').contentWindow.document.body.querySelector('#entryCanvasWrapper');
                    const but = document.querySelector('iframe').contentWindow.document.body.querySelector('#entryCanvasWrapper > div > div');
                    if (but? wrap? !but.classList.contains('entryRemove'): true : true) {
                        setTimeout(waiting2, 500);
                        return;
                    }
                    let saveLock = 0;
                    const mouseLock = async () => {
                        if (Entry123.canvas_) {
                            if (Entry123.variableContainer.getVariableByName('+Lock').value_ === 1 && but.classList.contains('entryRemove')) {
                                if (saveLock === 0) {
                                    if (document.querySelector('iframe').contentWindow.document.pointerLockElement !== Entry123.canvas_) {
                                        try {
                                            await Entry123.canvas_.requestPointerLock({
                                                unadjustedMovement: true,
                                            });
                                            saveLock = 1;
                                        } catch (e) {
                                            console.log('잠깐 뒤에 실행해주세요.');
                                        }
                                    }
                                }
                                if (Entry123.variableContainer.getListByName('+마우스')) {
                                    Entry123.variableContainer.getListByName('+마우스').array_ = [...Entry123.variableContainer.getListByName('+마우스').array_, {data: `${x / Entry123.canvas_.clientWidth * 480},${y / Entry123.canvas_.clientHeight * 270}`}];
                                    // x = 0;
                                    // y = 0;
                                }
                            }
                            else {
                                x = 0;
                                y = 0;
                                if (document.querySelector('iframe').contentWindow.document.pointerLockElement === Entry123.canvas_) {
                                    document.querySelector('iframe').contentWindow.document.exitPointerLock();
                                    saveLock = 0;
                                }
                            }
                        }
                        setTimeout(mouseLock, 16);
                        // requestAnimationFrame(mouseLock);
                    }
                    mouseLock();
                    let x = 0;
                    let y = 0;
                    const lockMouse = async () => {
                        if (Entry123.variableContainer.getVariableByName('+Lock').value_ === 1) {
                            try {
                                await Entry123.canvas_.requestPointerLock({
                                    unadjustedMovement: true,
                                });
                            } catch (e) {
                                console.log('잠깐 뒤에 실행해주세요.');
                            }
                        }
                        else {
                            document.querySelector('iframe').contentWindow.document.exitPointerLock();
                        }
                    }
                    Entry123.canvas_.addEventListener("click", lockMouse);
                    Entry123.canvas_.addEventListener("mousemove", (e) => {
                        if (Entry123.variableContainer.getVariableByName('+Lock').value_ === 1) {
                            x += e.movementX;
                            y += -e.movementY;
                            // console.log(e.movementX / Entry123.canvas_.clientWidth * 480, -e.movementY / Entry123.canvas_.clientHeight * 270);
                        }
                    });

                }
                setTimeout(waiting2, 1);
            }
        }
        else {
            setTimeout(waitAll, 1000);
            return;
        }
    }
    else {
        setTimeout(waitAll, 1000);
    }
    return;
}

waitAll();