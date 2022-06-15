
import { total }      from "./kolibri/util/test.js";
import { versionInfo} from "./kolibri/version.js";

import './crazyTest.js';

total.onChange( value => document.getElementById('grossTotal').textContent = "" + value + " tests done.")

document.querySelector("footer").textContent = "Built with Kolibri " + versionInfo;
