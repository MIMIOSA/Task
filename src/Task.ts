class Observer {
    onChange(task: Task) {
    }
}

class TaskCondition {
    onAccept(task) {

    }
    onsubmit(task) {

    }
}

class NPCTalkTaskCondition extends TaskCondition {
    constructor(){
        super();
    }
//    onAccept(task) {
//
//    }
//    onsubmit(task) {
//
//    }
}

class Task {
    id: string;
    name: string;
    desc: string;
    status: TaskStatus;
    fromNpcId: string;
    toNpcId: string;
    public constructor(id, name, desc, status, fromNpcId, toNpcId) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.status = status;
        this.fromNpcId = fromNpcId;
        this.toNpcId = toNpcId;
    }
}

enum TaskStatus {
    UNACCEPTABLE,
    ACCEPTABLE,
    DURING,
    CAN_SUBMIT,
    SUBMITTED,
}
