var classCode = document.getElementById("ders_kisa_adi")
var sectionCode = document.getElementById("ders_sube")
var addBtn = document.getElementById("ekle")
var closeBtn = document.getElementById("bilgilendirmeBtnKapat")

var lectures = [{code:"BİL482",section:1},{code:"BİL458", section:1},{code:"BİL481", section:1}]

for (let index = 0; index < lectures.length; index++) {
    classCode.value = lectures[index].code
    sectionCode.value = lectures[index].section
    addBtn.click()
    await new Promise(r => setTimeout(r, 1000));
    closeBtn.click()
}