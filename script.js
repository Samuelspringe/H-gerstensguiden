function Slumparestaurang() {
    const restauranger = ["Korfu", "Hägern", "Västertorps Hjärta", "Xian Köket", "Ny Gammalt", "Åsens Krog", "Krubb"];
    const slump = Math.floor(Math.random() * restauranger.length);
    document.getElementById("tips").innerHTML = restauranger[slump];
}
