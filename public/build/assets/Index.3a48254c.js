import{M as r}from"./Meeting.018e0e1b.js";import{u as o,a as t,F as l,j as n,af as c}from"./app.478912c7.js";import{S as d}from"./SectionTitle.a4050027.js";import{E as m}from"./index.dcdb430e.js";import{m as h}from"./motion.a4934bf3.js";const u={initial:{y:150,opacity:0},transition:{duration:1,type:"spring"},whileInView:{y:0,opacity:1},viewport:{once:!0}};function y({meetingsDB:e}){const i=e.map(a=>new r(a)),s=o();return t(l,{children:t("section",{className:"min-h-[calc(100vh-53px-57px)]",children:n("div",{className:"container lg:py-16 py-4 text-center lg:text-align-inherit",children:[t(d,{className:"mt-16 mb-48",title:s("\u0627\u0644\u062C\u0644\u0633\u0627\u062A","Meetings")}),i.length===0?t(m,{description:s("\u0644\u0627 \u062A\u0648\u062C\u062F \u062C\u0644\u0633\u0627\u062A \u0647\u0646\u0627","Nothing here yet")}):t("div",{className:"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4",children:i.map(a=>t(p,{meeting:a}))})]})})})}const p=({meeting:e})=>n(h.div,{...u,className:"meeting relative cursor-pointer border-4 border-second rounded-lg shadow-xl p-4",children:[t("span",{className:"block absolute top-0 left-12 bg-main p-2 text-white text-xl rounded-b",children:e.year}),n("h4",{className:" text-4xl sm:text-5xl lg:text-6xl  font-normal text-center py-16 border-b-2 border-main",children:["@ ",e.month," / ",e.day]}),n("div",{className:"flex flex-wrap gap-4 justify-between m-4 items-center mb-0",children:[t("span",{className:"text-xl font-bold block",children:e.name}),e.state==="not_started"||e.state==="in_meeting"?t("a",{target:"_blank",href:e.link,className:"flex-shrink-0 rounded bg-second hover:bg-main hover:text-white text-white shadow font-sans p-2",children:"Join Meeting"}):t(c,{href:`/meetings/${e.id}`,className:"flex-shrink-0 rounded bg-second hover:bg-main hover:text-white text-white shadow font-sans p-2",children:"Show Meeting"})]})]});export{y as default};