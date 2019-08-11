let myMeetings = {
        day: 'Monday',
        meetings: '4',
        meetingsdone: '0',
        addmeetings: function() {
            this.meeting = this.meeting + 4;
            return this.meetings
        },
        summary: function() {
            console.log(`you have ${this.meetings} left today`)
        }
    }
    //console.log(myMeetings.addmeetings())
    //myMeetings.summary()

console.log(typeof(NULL))