var TaskPanel = (function () {
    function TaskPanel(stage, taskService) {
        this.bgColor_Task = 0x00559d; //Task Panel
        this.panelX = 0;
        this.panelY = 0;
        this.panelWidth = 300;
        this.panelHeight = 200;
        this.taskNameTextFieldText = "Task Panel";
        this.taskNameTextFieldX = 70;
        this.taskNameTextFieldY = 25;
        this.taskNameTextFieldWidth = 300;
        this.taskNameTextFieldColor = 0x000000;
        this.taskStateTextField = "";
        this.taskStateTextX = 30;
        this.taskStateTextY = 80;
        this.taskStateTextWidth = 180;
        this.taskStateTextColor = 0xFF0000;
        this.buttonColor = 0xeaffb1;
        this.buttonX = 60;
        this.buttonY = 130;
        this.buttonWidth = 180;
        this.buttonHeight = 45;
        this.buttonText = "No Task";
        this.buttonTextX = this.buttonX + 12;
        this.buttonTextY = this.buttonY + 10;
        this.buttonTextWidth = 180;
        this.buttonTextColor = 0x808080; //grey
        this.stage = stage;
        this.taskService = taskService;
        this.taskService.Attach(this, "TaskPanel");
        this.panel = new egret.DisplayObjectContainer();
        this.taskNameTextField = new egret.TextField();
        this.taskStateText = new egret.TextField();
        this.rectTaskPanel = new egret.Shape();
        this.button = new egret.DisplayObjectContainer();
        this.rectButton = new egret.Shape();
        this.buttonTextField = new egret.TextField();
        this.stage.addChild(this.panel);
        this.drawPanel();
    }
    var d = __define,c=TaskPanel,p=c.prototype;
    p.setText = function () {
        this.taskNameTextField.text = this.taskNameTextFieldText;
        this.taskNameTextField.x = this.taskNameTextFieldX;
        this.taskNameTextField.y = this.taskNameTextFieldY;
        this.taskNameTextField.width = this.taskNameTextFieldWidth;
        this.taskNameTextField.bold = true;
        this.taskNameTextField.textColor = this.taskNameTextFieldColor;
        this.taskStateText.text = this.taskStateTextField;
        this.taskStateText.x = this.taskStateTextX;
        this.taskStateText.y = this.taskStateTextY;
        this.taskStateText.width = this.taskStateTextWidth;
        this.taskStateText.bold = false;
        this.taskStateText.textColor = this.taskStateTextColor;
        this.taskStateText.textAlign = egret.HorizontalAlign.LEFT;
    };
    p.drawTaskPanel = function () {
        this.rectTaskPanel.graphics.beginFill(this.bgColor_Task, 1);
        this.rectTaskPanel.graphics.drawRect(0, 0, this.panelWidth, this.panelHeight);
        this.rectTaskPanel.graphics.endFill();
    };
    p.drawButtonPanel = function () {
        this.rectButton.graphics.beginFill(this.buttonColor, 1);
        this.rectButton.graphics.drawRect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight);
        this.rectButton.graphics.endFill();
    };
    p.setButtonText = function () {
        this.buttonTextField.text = this.buttonText;
        this.buttonTextField.x = this.buttonTextX;
        this.buttonTextField.y = this.buttonTextY;
        this.buttonTextField.width = this.buttonTextWidth;
        this.buttonTextField.bold = false;
        this.buttonTextField.textColor = this.buttonTextColor;
    };
    p.drawButton = function () {
        this.drawButtonPanel();
        this.setButtonText();
        this.button.addChild(this.rectButton);
        this.button.addChild(this.buttonTextField);
    };
    p.drawPanel = function () {
        this.panel.x = this.panelX;
        this.panel.y = this.panelY;
        this.panel.width = this.panelWidth;
        this.panel.height = this.panelHeight;
        this.drawButton();
        this.drawTaskPanel();
        this.setText();
        this.panel.addChild(this.rectTaskPanel);
        this.panel.addChild(this.taskNameTextField);
        this.panel.addChild(this.taskStateText);
        this.panel.addChild(this.button);
        this.button.touchEnabled = true;
    };
    p.onChange = function (task) {
        this.currentTaskId = task.id;
        this.changeTaskText(task.name, task.desc);
        this.changeButton(task.status);
        this.currentTaskStatus = task.status;
    };
    p.changeTaskText = function (name, desc) {
        this.taskNameTextField.text = name;
        this.taskStateText.text = desc;
    };
    p.changeButton = function (taskStatus) {
        switch (taskStatus) {
            case TaskStatus.ACCEPTABLE:
                this.buttonTextField.text = "acceptable";
                break;
            case TaskStatus.DURING:
                this.buttonTextField.text = "unfinished";
                break;
            case TaskStatus.CAN_SUBMIT:
                this.buttonTextField.text = "submit";
                break;
            case TaskStatus.SUBMITTED:
                this.taskNameTextField.text = "Task Panel";
                this.taskStateText.text = "NULL";
                this.buttonTextField.text = "No Task";
                break;
            default:
                this.buttonTextField.text = "None";
                break;
        }
    };
    return TaskPanel;
}());
egret.registerClass(TaskPanel,'TaskPanel');
//# sourceMappingURL=TaskPanel.js.map