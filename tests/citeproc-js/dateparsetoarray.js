/*
 * Copyright (c) 2009, 2010, 2011 and 2012 Frank G. Bennett, Jr. All Rights
 * Reserved.
 *
 * The contents of this file are subject to the Common Public
 * Attribution License Version 1.0 (the “License”); you may not use
 * this file except in compliance with the License. You may obtain a
 * copy of the License at:
 *
 * http://bitbucket.org/fbennett/citeproc-js/src/tip/LICENSE.
 *
 * The License is based on the Mozilla Public License Version 1.1 but
 * Sections 1.13, 14 and 15 have been added to cover use of software over a
 * computer network and provide for limited attribution for the
 * Original Developer. In addition, Exhibit A has been modified to be
 * consistent with Exhibit B.
 *
 * Software distributed under the License is distributed on an “AS IS”
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See
 * the License for the specific language governing rights and limitations
 * under the License.
 *
 * The Original Code is the citation formatting software known as
 * "citeproc-js" (an implementation of the Citation Style Language
 * [CSL]), including the original test fixtures and software located
 * under the ./tests subdirectory of the distribution archive.
 *
 * The Original Developer is not the Initial Developer and is
 * __________. If left blank, the Original Developer is the Initial
 * Developer.
 *
 * The Initial Developer of the Original Code is Frank G. Bennett,
 * Jr. All portions of the code written by Frank G. Bennett, Jr. are
 * Copyright (c) 2009, 2010, 2011, and 2012 Frank G. Bennett, Jr. All Rights Reserved.
 *
 * Alternatively, the contents of this file may be used under the
 * terms of the GNU Affero General Public License (the [AGPLv3]
 * License), in which case the provisions of [AGPLv3] License are
 * applicable instead of those above. If you wish to allow use of your
 * version of this file only under the terms of the [AGPLv3] License
 * and not to allow others to use your version of this file under the
 * CPAL, indicate your decision by deleting the provisions above and
 * replace them with the notice and other provisions required by the
 * [AGPLv3] License. If you do not delete the provisions above, a
 * recipient may use your version of this file under either the CPAL
 * or the [AGPLv3] License.”
 */

dojo.provide("citeproc_js.dateparsetoarray");

var keycount = function(obj){
    var c=0;
    for (pos in obj) {
      c+=1;
    }
    return c;
};

doh.register("tests.dateparsetoarray", [
	function test_dateparsetoarray029() {
		var parser = new CSL.DateParser;
		parser.returnAsArray();
		var res = parser.parse("Aug 15 2000 - Aug 20 2000");
        doh.assertEqual("2000", res["date-parts"][1][0]);
        doh.assertEqual("8", res["date-parts"][0][1]);
        doh.assertEqual("20", res["date-parts"][1][2]);
        doh.assertEqual("2000", res["date-parts"][0][0]);
        doh.assertEqual("8", res["date-parts"][1][1]);
        doh.assertEqual("15", res["date-parts"][0][2]);
        doh.assertEqual(1, keycount(res) );
		}
]);
