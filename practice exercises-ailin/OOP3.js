class BankAccount {
    #balance = 0; // Private field starting at 0
    owner;        // Public field

    constructor(owner) {
        this.owner = owner;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.#balance) {
                this.#balance -= amount;
            } else {
                console.log(`Insufficient funds for ${this.owner}. Requested: ${amount}, Available: ${this.#balance}`);
            }
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const acc = new BankAccount("Nurlan");
acc.deposit(100);
acc.withdraw(30);
console.log(acc.getBalance()); // Output: 70

acc.withdraw(100);             // Output: Insufficient funds for Nurlan...
console.log(acc.getBalance()); // Output: 70 (balance remains unchanged)