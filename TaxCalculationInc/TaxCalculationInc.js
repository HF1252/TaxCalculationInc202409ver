function calculateTax() {
    const capital = parseFloat(document.getElementById('capital').value);
    const profit = parseFloat(document.getElementById('profit').value);
    const employees = parseInt(document.getElementById('employees').value);
    const salary = parseFloat(document.getElementById('salary').value);

    if (isNaN(capital) || isNaN(profit) || isNaN(employees) || isNaN(salary)) {
        document.getElementById('result').textContent = '全ての入力欄に正しい値を入力してください。';
        return;
    }

    // 法人住民税（均等割）
    const equalTax = 70000 / 12; // 年間7万円

    // 法人税率 (23.2%)
    const corporateTax = profit > 0 ? profit * 0.232 : 0;

    // 社会保険料の会社負担分（おおよそ月給の15%として計算）
    const socialInsurance = employees * salary * 0.15;

    // 合計税金
    const totalTax = equalTax + (corporateTax / 12) + socialInsurance;

    document.getElementById('result').textContent = `月額合計税金: ${totalTax.toFixed(0)}円`;
}