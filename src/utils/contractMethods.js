// دالة للاتصال بالعقد الذكي والحصول على قائمة الرسائل الموجودة
export async function listWritings() {
  const results = await window.contract.listWritings();
  console.log("test", results);
  return results;
}

// دالة للاتصال بالعقد الذكي بدالة "writeSomething "
//  من أجل إنشاء رسالة جديدة
export async function writeSomething({ message, receiver }) {
  await window.contract.writeSomething({
    message: message,
    toWho: receiver,
  });
}
