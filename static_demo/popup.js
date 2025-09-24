async function getCurrentTab() {
let [query] = await chrome.tabs.query(
{active: true, lastFocusedWindow:true}
)

console.log(query)
return query.id
  }

async function addCSS() {
const currentTab = await getCurrentTab()
chrome.scripting.insertCSS({
      target: {
        tabId: currentTab,
      },
      css: `
:root {
--cp-theme-app-header-bg: #0e273f !important;

}

header, header * {
color: white !important;
border: none !important;
outline: none !important;
}


body { 
	background-color: #28537b !important;
 }

.card.section-content-card {
border: none !important;
outline: none !imporant;
}

.card-body.markdown-body {
background-color: #0e273f !important; 
color: #ffffff !important;
font-size:1rem;


a {
color: #dddddd !important;
}

.alert {
background-color: #5d95d5 !important;
}
}
.col-md-2.sidebar.hidden-print {
/*display: none !important;*/
a {
color: #eeeeee !important;
&:active, &:active span{
color: white !important;
font-weight: 700 !important;
}

}

}


`,
    });

console.log(`Added style to tab id ${currentTab}`)
}
addCSS()  