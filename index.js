// const run = async (vs) => {
//     let as = document.querySelectorAll('a');
//     if (vs.length !== as.length) {
//         as.forEach(async v => {
//             if (v.innerHTML.startsWith('https://playentry.org/project/')) {
//                 let a = v.innerHTML.slice(30);
//                 let fet = await fetch("https://playentry.org/graphql", {
//                     "headers": {
//                       "accept": "*/*",
//                       "accept-language": "ko-KR,ko;q=0.9,en;q=0.8",
//                       "content-type": "application/json",
//                       "csrf-token": "F5I5rURR--XavKbxpQP6ftx8CKdSBJu6KiiQ",
//                       "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
//                       "sec-ch-ua-mobile": "?0",
//                       "sec-ch-ua-platform": "\"Windows\"",
//                       "sec-fetch-dest": "empty",
//                       "sec-fetch-mode": "cors",
//                       "sec-fetch-site": "same-origin",
//                       "x-client-type": "Client",
//                       "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZG5vIjoiODVmZGIyMzAtYzdjOS0xMWU4LTgyN2ItMjQ2ZTk2NDg3ZTM4IiwiZXhwIjoxNjg0NzI1NDA2LCJpYXQiOjE2ODM1MTU4MDZ9.8GeAcjovViH_g_40DEuPY-Pr_fZWkK_4V3goiUoUq3A",
//                       "Referer": v.innerHTML,
//                       "Referrer-Policy": "strict-origin-when-cross-origin"
//                     },
//                     "body": "{\"query\":\"\\n    query SELECT_PROJECT_LITE($id: ID! $groupId: ID) {\\n        project(id: $id, groupId: $groupId) {\\n            \\n    id\\n    name\\n    user {\\n        \\n    id\\n    nickname\\n    username\\n    profileImage {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    status {\\n        following\\n        follower\\n    }\\n    description\\n    role\\n    mark {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n \\n    }\\n\\n    }\\n    thumb\\n    isopen\\n    showComment\\n    blamed\\n    isPracticalCourse\\n    category\\n    categoryCode\\n    created\\n    updated\\n    special\\n    isForLecture\\n    isForStudy\\n    isForSubmit\\n    hashId\\n    complexity\\n    staffPicked\\n    ranked\\n    visit\\n    likeCnt\\n    comment\\n    favorite\\n    shortenUrl\\n    parent {\\n        id\\n        name\\n        user {\\n            id\\n            username\\n            nickname\\n        }\\n    }\\n    description\\n    description2\\n    description3\\n    hasRealTimeVariable\\n    childCnt\\n    commentGroup {\\n        group\\n        count\\n    }\\n    likeCntGroup {\\n        group\\n        count\\n    }\\n    visitGroup {\\n        group\\n        count\\n    }\\n    recentGroup {\\n        group\\n        count\\n    }\\n\\n        }\\n     }\\n\",\"variables\":{\"id\":\"" + a + "\"}}",
//                     "method": "POST"
//                 });
//                 res = await fet.json();
//                 console.log(res);
//                 v.parentElement.style = 'display: flex; flex-direction: column;';
//                 v.innerHTML = `<div class="ep_back"><div class="ep_likes">❤️${res.data.project.likeCnt} 💬${res.data.project.comment} 👁️${res.data.project.visit}</div><img src="${res.data.project.thumb}" class="ep_image"><div class="ep_info"><div class="ep_info_b"><div class="ep_info_name">${res.data.project.name}</div><div class="ep_info_des">${res.data.project.description? res.data.project.description:''}<br>${res.data.project.description2? res.data.project.description2:''}<br>${res.data.project.description3? res.data.project.description3:''}</div></div></div></div>`;
//                 // v.innerHTML = `<iframe width="640" height="420" src="https://playentry.org/iframe/${a}" frameborder="0" style="padding: 5px; margin: 10px; background-color: rgb(10, 133, 255); border-radius: 4px; transform: scale(80%, 80%);"></iframe>`;
//                 // v.innerHTML = `<div style="display: flex; flex-direction: row;"><div style="position: absolute; transform: translate(15px, 144px); font-size: 20px; color: white; padding: 3px; padding-right: 6px; border-radius: 5px; background-color: #0000005c;">❤️${res.data.project.likeCnt} 💬${res.data.project.comment} 👁️${res.data.project.visit}</div><img src="${res.data.project.thumb}" style="width: calc(100%-10px); height: auto; padding: 5px; margin-bottom: 20px; background-color: rgb(10, 133, 255); border-top-left-radius: 4px; border-bottom-left-radius: 4px;"><div style=" background-color: rgb(10, 133, 255); background: linear-gradient(270deg, rgba(6,92,179,1) 0%, rgba(10,133,255,1) 100%); padding: 5px; width: 200px; height: 176px; color: #ffffff; overflow: hidden; border-top-right-radius: 4px; border-bottom-right-radius: 4px; padding-right: 10px"><div style="font-weight: 600; font-size: 28px; line-height: 30px; padding-top: 5px;">${res.data.project.name}</div><div style="font-size: 12px; line-height: 19px; padding-top: 0px;">${res.data.project.description? res.data.project.description:''}<br>${res.data.project.description2? res.data.project.description2:''}<br>${res.data.project.description3? res.data.project.description3:''}</div></div></div>`;
//                 // v.innerHTML = `<div style="display: flex; flex-direction: row;"><img src="https://playentry.org/uploads/thumb/${a.slice(0, 4)}/${a}.png" style="width: calc(100%-10px); height: auto; padding: 5px; margin-bottom: 20px; background-color: rgb(10, 133, 255); border-top-left-radius: 4px; border-bottom-left-radius: 4px;"><div style=" background-color: rgb(10, 133, 255); padding: 5px; width: 200px; height: 176px; color: #ffffff; overflow: hidden; border-top-right-radius: 4px; border-bottom-right-radius: 4px;"><div style="font-weight: 600; font-size: 28px; line-height: 30px; padding-top: 5px;">${res.data.project.name}</div><div style="font-size: 12px; line-height: 19px; padding-top: 0px;">${res.data.project.description? res.data.project.description:''}<br>${res.data.project.description2? res.data.project.description2:''}<br>${res.data.project.description3? res.data.project.description3:''}</div></div></div>`;
//             }
//         });
//     }
//     setTimeout(()=>{run(as)}, 300);
// };
// run(['']);

let md123;

async function changeContent(){
    let as = document.querySelectorAll('a');
    as.forEach(async v => {
        if (v.innerHTML.startsWith('https://playentry.org/project/')) {
            let a = v.innerHTML.slice(30);
            const csrf = document.querySelector("meta[name=csrf-token]").content;
            const xToken = JSON.parse(document.getElementById("__NEXT_DATA__").innerText).props.pageProps.initialState.common.user.xToken;
            let fet = await fetch("https://playentry.org/graphql", {
                "headers": {
                  "accept": "*/*",
                  "accept-language": "ko-KR,ko;q=0.9,en;q=0.8",
                  "content-type": "application/json",
                  "csrf-token": csrf,
                  "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
                  "sec-ch-ua-mobile": "?0",
                  "sec-ch-ua-platform": "\"Windows\"",
                  "sec-fetch-dest": "empty",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-site": "same-origin",
                  "x-client-type": "Client",
                  "x-token": xToken,
                  "Referer": v.innerHTML,
                  "Referrer-Policy": "strict-origin-when-cross-origin"
                },
                "body": "{\"query\":\"\\n    query SELECT_PROJECT_LITE($id: ID! $groupId: ID) {\\n        project(id: $id, groupId: $groupId) {\\n            \\n    id\\n    name\\n    user {\\n        \\n    id\\n    nickname\\n    username\\n    profileImage {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    status {\\n        following\\n        follower\\n    }\\n    description\\n    role\\n    mark {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n \\n    }\\n\\n    }\\n    thumb\\n    isopen\\n    showComment\\n    blamed\\n    isPracticalCourse\\n    category\\n    categoryCode\\n    created\\n    updated\\n    special\\n    isForLecture\\n    isForStudy\\n    isForSubmit\\n    hashId\\n    complexity\\n    staffPicked\\n    ranked\\n    visit\\n    likeCnt\\n    comment\\n    favorite\\n    shortenUrl\\n    parent {\\n        id\\n        name\\n        user {\\n            id\\n            username\\n            nickname\\n        }\\n    }\\n    description\\n    description2\\n    description3\\n    hasRealTimeVariable\\n    childCnt\\n    commentGroup {\\n        group\\n        count\\n    }\\n    likeCntGroup {\\n        group\\n        count\\n    }\\n    visitGroup {\\n        group\\n        count\\n    }\\n    recentGroup {\\n        group\\n        count\\n    }\\n\\n        }\\n     }\\n\",\"variables\":{\"id\":\"" + a + "\"}}",
                "method": "POST"
            });
            res = await fet.json();
            if (res.data) {
                v.parentElement.style = 'display: flex; flex-direction: column;';
                v.innerHTML = `<div class="ep_back"><div class="ep_likes">❤️${res.data.project.likeCnt} 💬${res.data.project.comment} 👁️${res.data.project.visit}</div><img src="${res.data.project.thumb}" class="ep_image"><div class="ep_info"><div class="ep_info_b"><div class="ep_info_name">${res.data.project.name}</div><div class="ep_info_des">${res.data.project.description? res.data.project.description.replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('\n', '<br>'):''}<br>${res.data.project.description2? res.data.project.description2.replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('\n', '<br>'):''}<br>${res.data.project.description3? res.data.project.description3.replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('\n', '<br>'):''}</div></div></div></div>`;
            }
        }
    });
    
    // setInterval(() => {
    //     if (EntryTool) console.log(EntryTool);
    //     else console.log('none');
    // }, 1000);

    // if (document.defaultView) {
    //     console.log(document.defaultView);
    // }
    // else {
    //     console.log('없음');
    // }

    // if (!md123) {
    //     await import("https://cdnjs.cloudflare.com/ajax/libs/remarkable/2.0.0/remarkable.min.js");
    //     md = new window.remarkable.Remarkable();
    //     console.log(md);
    // }
    // let gls = document.querySelectorAll('.e1i41bku1:not(.asdfasdf)');
    // gls.forEach(v => {
    //     v.innerHTML = md.render(v.innerText);
    //     v.classList.add('asdfasdf');
    //     v.style.height = 'auto';
    // });

    // let elements = Array.from(document.querySelectorAll(".css-sy8ihv")); //글 불러오기

    // elements = elements.filter(element => //이미 수정했거나 조건 안맞는 글 필터링
    //     element.getAttribute("data-cheese-change") != "1" &&
    //     element.children.length === 0 &&
    //     element.textContent
    // ).forEach(element => { //글 내용 수정
    //     element.setAttribute("data-cheese-change","1"); //수정한 경우 다시 수정하지 않게 표시

    //     text = element.textContent; //글 내용 가져오기

    //     //XSS공격 방지
    //     text = text.replace(/</g, '&lt;');
    //     text = text.replace(/>/g, '&gt;');
    //     text = text.replace(/&/g, '&amp;');
    //     text = text.replace(/\//g, '&#x2F;');

    //     //글 내용 수정
    //     text = text.replace(/\​\​\​\​(\S.*?\S)\​\​\​\​/g,'<del>$1</del>');
    //     text = text.replace(/\​\​\​(\S.*?\S)\​\​\​/g, '<ins>$1</ins>');
    //     text = text.replace(/\​\​(\S.*?\S)\​\​/g, '<strong>$1</strong>');
    //     text = text.replace(/\​(\S.*?\S)\​/g,'<em style="font-style: italic">$1</em>');

    //     //수정된 내용 적용
    //     element.innerHTML = text;
    // });
    // location.pathname === "/community/entrystory/list" && 
    // 마크다운 변환
    // if (!document.querySelector('.ep_fake') && document.querySelector('a.css-1adjw8a.e13821ld2') && document.querySelector("meta[name=csrf-token]")) {
    //     let write = document.querySelector('a.css-1adjw8a.e13821ld2');
    //     const but = document.createElement("a");
    //     but.className = "ep_fake";
    //     but.innerText = "등록";
    //     but.role = "button";
    //     but.addEventListener("click", () => {
    //         const area = document.querySelector("#Write");
    //         let res = area.innerHTML.replaceAll('*', '​').replaceAll('__', '​​​').replaceAll('~~', '​​​​');
    //         area.value = res;
    //         area.innerHTML = res;
    //         const xToken = JSON.parse(document.getElementById("__NEXT_DATA__").innerText).props.pageProps.initialState.common.user.xToken;
    //         const csrf = document.querySelector("meta[name=csrf-token]").content;
    //         chrome.runtime.sendMessage({
    //             contentScriptQuery: "post",
    //             data: {
    //             csrf,
    //             xToken,
    //             cookie: document.cookie,
    //             data: res,
    //             },
    //         },
    //             () => {
    //                 // write.click();
    //                 location.reload();
    //             }
    //         );
    //     });
    //     write.style = 'display: none';
    //     write.parentElement.appendChild(but);
    // }
}
//html이 수정될때 changeContent호출
const targetNode = document.querySelector("body");
const observer = new MutationObserver(changeContent);
observer.observe(targetNode, { attributes: true, childList: true, subtree: true });
