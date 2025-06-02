/**
 * initiate the flag to skip when a failure is detected
 * @param {any} obj - this instance
 * @param {boolean} isStopRunner - flag to stop the entire runner
 */
Cypress.Commands.add('skipWhenFail', (obj, isStopRunner = false) => {
    //check if initialized status
    if (!Cypress.env('skipTestStatus').isInit) {
        //sets the property when failed
        Cypress.on('fail', (error) => {
            //checks if the error is due force skip or a valid failure
            var isFailed = error.codeFrame == undefined ? false : true;

            //sets the flag when
            Cypress.env('skipTestStatus', {
                script: Cypress.mocha.getRunner().suite.title,
                isInit: true,
                isFailed: isFailed,
                isStop: isStopRunner
            });

            //throws error to report failure
            throw error;
        });
    } else {
        //skip on the specific testing
        cy.skipOn(true);
    }
});