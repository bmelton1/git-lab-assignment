/*
 * Copyright (c) 2016 by SharpTop Software, LLC
 * All rights reserved. No part of this software project may be used, reproduced, distributed, or transmitted in any
 * form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior
 * written permission of SharpTop Software, LLC. For permission requests, write to the author at info@sharptop.co.
 */

import {inject} from 'aurelia-framework'
import {PrayerRequestService, NavigationService} from '../../services/index'

@inject(PrayerRequestService, NavigationService)
export class PrayerRequestsList {

    constructor(prayerRequestService, navigationService) {
        this.prayerRequestService = prayerRequestService
        this.navigationService = navigationService
        this.prayerRequests = prayerRequestService.list()
    }

    show(prayerRequest) {
        this.navigationService.go(prayerRequest)
    }
}