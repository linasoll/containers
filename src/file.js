export class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            const err = new Error("Этот персонаж уже добавлен в команду");
            throw err;
        }
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach(character => {
            if (!this.members.has(character)) {
                this.members.add(character);
            }
        });
    }

    toArray() {
        const arr = Array.from(this.members);
        return arr
    }
}