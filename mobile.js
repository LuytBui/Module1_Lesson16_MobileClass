class Mobile {
    get battery() {
        return this._battery;
    }

    set battery(value) {
        this._battery = value;
    }

    get draft() {
        return this._draft;
    }

    set draft(value) {
        this._draft = value;
    }

    get inbox() {
        return this._inbox;
    }

    set inbox(value) {
        this._inbox = value;
    }

    get sent() {
        return this._sent;
    }

    set sent(value) {
        this._sent = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    _battery;
    _draft;
    _inbox;
    _sent;
    _status;

    constructor(battery, draft, inbox, sent, status) {
        this._battery = battery;
        this._draft = draft;
        this._inbox = inbox;
        this._sent = sent;
        this._status = status;
    }

    checkStatus() {
        return this.status;
    }

    switch() {
        //bật tắt
        this._status = !this._status;
    }
    charge(){
        this.battery += 10;
        if (this.battery >100) {
            this.battery = 100;
        }
    }
    createMessage(content){
        this._draft.push(content);
    }
    receiveMessage(content, senderMobile){
        this._inbox.push(content);
        senderMobile.sent.push(content);
    }
    sendMessage(content, receiverMobile){
        this._sent.push(content);
        receiverMobile.inbox.push(content);
    }
    showInbox(){
        let message = 'Inbox: \n';
        for (let i = 0; i<this._inbox.length; i++){
            message += (i+1) + '. ' + this._inbox[i]+'\n';
        }
        alert(message);
    }
    showSent(){
        let message = 'Sent: \n';
        for (let i = 0; i<this._sent.length; i++){
            message += (i+1) + '. ' + this._sent[i]+'\n';
        }
        alert(message);
    }
}