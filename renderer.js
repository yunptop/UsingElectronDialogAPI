document.querySelector("#btn-show-open-dialog").onclick = async function () {
    let result = await externals.dialog_showOpenDialog();
    console.log(result);
}