const attackValue = 10;
const monsterAttackValue = 14;
let chooseMaxLife = 5;
let currentMonsterHealth = chooseMaxLife;
let currentPlayerHealth = chooseMaxLife;

adjustHealthBars(chooseMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(attackValue);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(monsterAttackValue);
  currentMonsterHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth >= 0) {
    alert("You Won");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth >= 0) {
    alert("You Lost");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("Draw");
  }
}

attackBtn.addEventListener("click", attackHandler);
