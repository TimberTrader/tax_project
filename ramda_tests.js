const R = require('ramda');

const data = [{"roll_year":"2018","roll_number":"202016192","address":"47V 142 89 ST SW","assessed_value":"10000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"10000","comm_code":"WSP","comm_name":"WEST SPRINGS","unique_key":"2018202016192"},{"roll_year":"2018","roll_number":"202500559","address":"171V 214 SHERWOOD SQ NW","assessed_value":"10000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"10000","comm_code":"SHW","comm_name":"SHERWOOD","unique_key":"2018202500559"},{"roll_year":"2018","roll_number":"202506515","address":"65 30 AV SW","assessed_value":"432500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"432500","comm_code":"ERL","comm_name":"ERLTON","unique_key":"2018202506515"},{"roll_year":"2018","roll_number":"202540308","address":"417 20 WALGROVE WK SE","assessed_value":"180000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"180000","comm_code":"WAL","comm_name":"WALDEN","unique_key":"2018202540308"},{"roll_year":"2018","roll_number":"202571543","address":"2204 310 12 AV SW","assessed_value":"200000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"200000","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018202571543"},{"roll_year":"2018","roll_number":"067136721","address":"819 13 AV SW","assessed_value":"1120000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"1120000","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018067136721"},{"roll_year":"2018","roll_number":"201481272","address":"276V 2727 28 AV SE","assessed_value":"10000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"10000","comm_code":"DOV","comm_name":"DOVER","unique_key":"2018201481272"},{"roll_year":"2018","roll_number":"122981442","address":"73 9200 BLACKFOOT TR SE","assessed_value":"19800","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"19800","comm_code":"ACA","comm_name":"ACADIA","unique_key":"2018122981442"},{"roll_year":"2018","roll_number":"122981665","address":"84 9200 BLACKFOOT TR SE","assessed_value":"13830","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"13830","comm_code":"ACA","comm_name":"ACADIA","unique_key":"2018122981665"},{"roll_year":"2018","roll_number":"073982126","address":"107 6724 17 AV SE","assessed_value":"51500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"51500","comm_code":"RED","comm_name":"RED CARPET/MOUNTVIEW MOBILE PARK","unique_key":"2018073982126"},{"roll_year":"2018","roll_number":"122981947","address":"110 9200 BLACKFOOT TR SE","assessed_value":"17910","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"17910","comm_code":"ACA","comm_name":"ACADIA","unique_key":"2018122981947"},{"roll_year":"2018","roll_number":"122982028","address":"114 9200 BLACKFOOT TR SE","assessed_value":"20500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"20500","comm_code":"ACA","comm_name":"ACADIA","unique_key":"2018122982028"},{"roll_year":"2018","roll_number":"122982143","address":"120 9200 BLACKFOOT TR SE","assessed_value":"17350","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"17350","comm_code":"ACA","comm_name":"ACADIA","unique_key":"2018122982143"},{"roll_year":"2018","roll_number":"122982283","address":"127 9200 BLACKFOOT TR SE","assessed_value":"15170","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"15170","comm_code":"ACA","comm_name":"ACADIA","unique_key":"2018122982283"},{"roll_year":"2018","roll_number":"073982282","address":"115 6724 17 AV SE","assessed_value":"96500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"96500","comm_code":"RED","comm_name":"RED CARPET/MOUNTVIEW MOBILE PARK","unique_key":"2018073982282"},{"roll_year":"2018","roll_number":"122982309","address":"128 9200 BLACKFOOT TR SE","assessed_value":"12350","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"12350","comm_code":"ACA","comm_name":"ACADIA","unique_key":"2018122982309"},{"roll_year":"2018","roll_number":"122982408","address":"134 9200 BLACKFOOT TR SE","assessed_value":"14190","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"14190","comm_code":"ACA","comm_name":"ACADIA","unique_key":"2018122982408"},{"roll_year":"2018","roll_number":"073982464","address":"124 6724 17 AV SE","assessed_value":"71500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"71500","comm_code":"RED","comm_name":"RED CARPET/MOUNTVIEW MOBILE PARK","unique_key":"2018073982464"},{"roll_year":"2018","roll_number":"073982563","address":"129 6724 17 AV SE","assessed_value":"136500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"136500","comm_code":"RED","comm_name":"RED CARPET/MOUNTVIEW MOBILE PARK","unique_key":"2018073982563"},{"roll_year":"2018","roll_number":"073982860","address":"144 6724 17 AV SE","assessed_value":"59500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"59500","comm_code":"RED","comm_name":"RED CARPET/MOUNTVIEW MOBILE PARK","unique_key":"2018073982860"},{"roll_year":"2018","roll_number":"073983082","address":"155 6724 17 AV SE","assessed_value":"57500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"57500","comm_code":"RED","comm_name":"RED CARPET/MOUNTVIEW MOBILE PARK","unique_key":"2018073983082"},{"roll_year":"2018","roll_number":"073983140","address":"158 6724 17 AV SE","assessed_value":"54500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"54500","comm_code":"RED","comm_name":"RED CARPET/MOUNTVIEW MOBILE PARK","unique_key":"2018073983140"},{"roll_year":"2018","roll_number":"073983249","address":"163 6724 17 AV SE","assessed_value":"52500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"52500","comm_code":"RED","comm_name":"RED CARPET/MOUNTVIEW MOBILE PARK","unique_key":"2018073983249"},{"roll_year":"2018","roll_number":"067944249","address":"62V 4 14 ST NW","assessed_value":"14500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"14500","comm_code":"HIL","comm_name":"HILLHURST","unique_key":"2018067944249"},{"roll_year":"2018","roll_number":"073981029","address":"52 6724 17 AV SE","assessed_value":"72500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"72500","comm_code":"RED","comm_name":"RED CARPET/MOUNTVIEW MOBILE PARK","unique_key":"2018073981029"},{"roll_year":"2018","roll_number":"073981128","address":"57 6724 17 AV SE","assessed_value":"50500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"50500","comm_code":"RED","comm_name":"RED CARPET/MOUNTVIEW MOBILE PARK","unique_key":"2018073981128"},{"roll_year":"2018","roll_number":"073981144","address":"58 6724 17 AV SE","assessed_value":"130500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"130500","comm_code":"RED","comm_name":"RED CARPET/MOUNTVIEW MOBILE PARK","unique_key":"2018073981144"},{"roll_year":"2018","roll_number":"073981169","address":"59 6724 17 AV SE","assessed_value":"74000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"74000","comm_code":"RED","comm_name":"RED CARPET/MOUNTVIEW MOBILE PARK","unique_key":"2018073981169"},{"roll_year":"2018","roll_number":"073981201","address":"61 6724 17 AV SE","assessed_value":"61500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"61500","comm_code":"RED","comm_name":"RED CARPET/MOUNTVIEW MOBILE PARK","unique_key":"2018073981201"},{"roll_year":"2018","roll_number":"073981284","address":"65 6724 17 AV SE","assessed_value":"55500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"55500","comm_code":"RED","comm_name":"RED CARPET/MOUNTVIEW MOBILE PARK","unique_key":"2018073981284"},{"roll_year":"2018","roll_number":"073981326","address":"67 6724 17 AV SE","assessed_value":"70500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"70500","comm_code":"RED","comm_name":"RED CARPET/MOUNTVIEW MOBILE PARK","unique_key":"2018073981326"},{"roll_year":"2018","roll_number":"075981142","address":"58 2106 50 ST SE","assessed_value":"21500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"21500","comm_code":"FLI","comm_name":"FOREST LAWN -  INDUSTRIAL","unique_key":"2018075981142"},{"roll_year":"2018","roll_number":"120981287","address":"20 9090 24 ST SE","assessed_value":"135500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"135500","comm_code":"SHI","comm_name":"SHEPARD INDUSTRIAL","unique_key":"2018120981287"},{"roll_year":"2018","roll_number":"079128211","address":"32 30 AV SW","assessed_value":"400500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"400500","comm_code":"ERL","comm_name":"ERLTON","unique_key":"2018079128211"},{"roll_year":"2018","roll_number":"120981428","address":"27 9090 24 ST SE","assessed_value":"79000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"79000","comm_code":"SHI","comm_name":"SHEPARD INDUSTRIAL","unique_key":"2018120981428"},{"roll_year":"2018","roll_number":"120981741","address":"43 9090 24 ST SE","assessed_value":"50000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"50000","comm_code":"SHI","comm_name":"SHEPARD INDUSTRIAL","unique_key":"2018120981741"},{"roll_year":"2018","roll_number":"120982269","address":"69 9090 24 ST SE","assessed_value":"66500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"66500","comm_code":"SHI","comm_name":"SHEPARD INDUSTRIAL","unique_key":"2018120982269"},{"roll_year":"2018","roll_number":"120982384","address":"75 9090 24 ST SE","assessed_value":"97000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"97000","comm_code":"SHI","comm_name":"SHEPARD INDUSTRIAL","unique_key":"2018120982384"},{"roll_year":"2018","roll_number":"120982525","address":"82 9090 24 ST SE","assessed_value":"64500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"64500","comm_code":"SHI","comm_name":"SHEPARD INDUSTRIAL","unique_key":"2018120982525"},{"roll_year":"2018","roll_number":"120982764","address":"94 9090 24 ST SE","assessed_value":"84000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"84000","comm_code":"SHI","comm_name":"SHEPARD INDUSTRIAL","unique_key":"2018120982764"},{"roll_year":"2018","roll_number":"120982780","address":"95 9090 24 ST SE","assessed_value":"62500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"62500","comm_code":"SHI","comm_name":"SHEPARD INDUSTRIAL","unique_key":"2018120982780"},{"roll_year":"2018","roll_number":"120982848","address":"98 9090 24 ST SE","assessed_value":"62500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"62500","comm_code":"SHI","comm_name":"SHEPARD INDUSTRIAL","unique_key":"2018120982848"},{"roll_year":"2018","roll_number":"120982947","address":"103 9090 24 ST SE","assessed_value":"84000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"84000","comm_code":"SHI","comm_name":"SHEPARD INDUSTRIAL","unique_key":"2018120982947"},{"roll_year":"2018","roll_number":"101048890","address":"5340 4 ST SW","assessed_value":"487500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"487500","comm_code":"WND","comm_name":"WINDSOR PARK","unique_key":"2018101048890"},{"roll_year":"2018","roll_number":"103087508","address":"5504 20 ST SW","assessed_value":"130000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"130000","comm_code":"NGM","comm_name":"NORTH GLENMORE PARK","unique_key":"2018103087508"},{"roll_year":"2018","roll_number":"120980388","address":"20 2787 86 AV SE","assessed_value":"4860","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"4860","comm_code":"SHI","comm_name":"SHEPARD INDUSTRIAL","unique_key":"2018120980388"},{"roll_year":"2018","roll_number":"200090751","address":"176S 640 EAU CLAIRE AV SW","assessed_value":"3150","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"3150","comm_code":"EAU","comm_name":"EAU CLAIRE","unique_key":"2018200090751"},{"roll_year":"2018","roll_number":"200090785","address":"179S 640 EAU CLAIRE AV SW","assessed_value":"3150","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"3150","comm_code":"EAU","comm_name":"EAU CLAIRE","unique_key":"2018200090785"},{"roll_year":"2018","roll_number":"162981203","address":"61 3223 83 ST NW","assessed_value":"32000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"32000","comm_code":"GRE","comm_name":"GREENWOOD/GREENBRIAR","unique_key":"2018162981203"},{"roll_year":"2018","roll_number":"200690006","address":"186V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200690006"},{"roll_year":"2018","roll_number":"200690014","address":"187V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200690014"},{"roll_year":"2018","roll_number":"162981567","address":"79 3223 83 ST NW","assessed_value":"56500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"56500","comm_code":"GRE","comm_name":"GREENWOOD/GREENBRIAR","unique_key":"2018162981567"},{"roll_year":"2018","roll_number":"200690238","address":"209V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200690238"},{"roll_year":"2018","roll_number":"162982086","address":"106 3223 83 ST NW","assessed_value":"25500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"25500","comm_code":"GRE","comm_name":"GREENWOOD/GREENBRIAR","unique_key":"2018162982086"},{"roll_year":"2018","roll_number":"174981043","address":"53 99 ARBOUR LAKE RD NW","assessed_value":"73000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"73000","comm_code":"ARB","comm_name":"ARBOUR LAKE","unique_key":"2018174981043"},{"roll_year":"2018","roll_number":"200690402","address":"226V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200690402"},{"roll_year":"2018","roll_number":"200690543","address":"240V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200690543"},{"roll_year":"2018","roll_number":"174987867","address":"307 99 ARBOUR LAKE RD NW","assessed_value":"79000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"79000","comm_code":"ARB","comm_name":"ARBOUR LAKE","unique_key":"2018174987867"},{"roll_year":"2018","roll_number":"200690576","address":"243V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200690576"},{"roll_year":"2018","roll_number":"200690584","address":"244V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200690584"},{"roll_year":"2018","roll_number":"200090710","address":"172S 640 EAU CLAIRE AV SW","assessed_value":"3150","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"3150","comm_code":"EAU","comm_name":"EAU CLAIRE","unique_key":"2018200090710"},{"roll_year":"2018","roll_number":"200090728","address":"173S 640 EAU CLAIRE AV SW","assessed_value":"3150","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"3150","comm_code":"EAU","comm_name":"EAU CLAIRE","unique_key":"2018200090728"},{"roll_year":"2018","roll_number":"200690931","address":"279V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200690931"},{"roll_year":"2018","roll_number":"200691004","address":"286V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200691004"},{"roll_year":"2018","roll_number":"200691061","address":"292V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200691061"},{"roll_year":"2018","roll_number":"200691079","address":"293V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200691079"},{"roll_year":"2018","roll_number":"200691087","address":"294V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200691087"},{"roll_year":"2018","roll_number":"200691095","address":"295V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200691095"},{"roll_year":"2018","roll_number":"200691269","address":"312V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200691269"},{"roll_year":"2018","roll_number":"200691301","address":"316V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200691301"},{"roll_year":"2018","roll_number":"200691319","address":"317V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200691319"},{"roll_year":"2018","roll_number":"200691376","address":"323V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200691376"},{"roll_year":"2018","roll_number":"200691400","address":"326V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200691400"},{"roll_year":"2018","roll_number":"200691467","address":"332V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200691467"},{"roll_year":"2018","roll_number":"200691509","address":"336V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200691509"},{"roll_year":"2018","roll_number":"200692440","address":"60V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200692440"},{"roll_year":"2018","roll_number":"200380210","address":"99 1101 84 ST NE","assessed_value":"139000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"139000","comm_code":"09O","comm_name":"RESIDUAL WARD 9 - SUB AREA 9O","unique_key":"2018200380210"},{"roll_year":"2018","roll_number":"200692515","address":"67V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200692515"},{"roll_year":"2018","roll_number":"200692580","address":"74V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200692580"},{"roll_year":"2018","roll_number":"200692630","address":"79V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200692630"},{"roll_year":"2018","roll_number":"200692689","address":"84V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200692689"},{"roll_year":"2018","roll_number":"200692713","address":"87V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200692713"},{"roll_year":"2018","roll_number":"200692754","address":"91V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200692754"},{"roll_year":"2018","roll_number":"200692762","address":"92V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200692762"},{"roll_year":"2018","roll_number":"200692861","address":"102V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200692861"},{"roll_year":"2018","roll_number":"200692929","address":"108V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200692929"},{"roll_year":"2018","roll_number":"201224110","address":"67V 8 BRIDLECREST DR SW","assessed_value":"10000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"10000","comm_code":"BRI","comm_name":"BRIDLEWOOD","unique_key":"2018201224110"},{"roll_year":"2018","roll_number":"201224193","address":"75V 8 BRIDLECREST DR SW","assessed_value":"10000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"10000","comm_code":"BRI","comm_name":"BRIDLEWOOD","unique_key":"2018201224193"},{"roll_year":"2018","roll_number":"201208766","address":"101V 115 PRESTWICK VI SE","assessed_value":"10000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"10000","comm_code":"MCT","comm_name":"MCKENZIE TOWNE","unique_key":"2018201208766"},{"roll_year":"2018","roll_number":"201208782","address":"103V 115 PRESTWICK VI SE","assessed_value":"10000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"10000","comm_code":"MCT","comm_name":"MCKENZIE TOWNE","unique_key":"2018201208782"},{"roll_year":"2018","roll_number":"201224250","address":"81V 8 BRIDLECREST DR SW","assessed_value":"10000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"10000","comm_code":"BRI","comm_name":"BRIDLEWOOD","unique_key":"2018201224250"},{"roll_year":"2018","roll_number":"201224292","address":"85V 8 BRIDLECREST DR SW","assessed_value":"10000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"10000","comm_code":"BRI","comm_name":"BRIDLEWOOD","unique_key":"2018201224292"},{"roll_year":"2018","roll_number":"200689768","address":"162V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200689768"},{"roll_year":"2018","roll_number":"200689867","address":"172V 1075 10 ST SW","assessed_value":"26500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"26500","comm_code":"BLN","comm_name":"BELTLINE","unique_key":"2018200689867"},{"roll_year":"2018","roll_number":"200704963","address":"506 18 AV NW","assessed_value":"633500","assessment_class":"RE","assessment_class_description":"Residential","comm_code":"MOP","comm_name":"MOUNT PLEASANT","latitude":"51.0690141594764","longitude":"-114.071948696696","location":{"latitude":"51.0690141594764","longitude":"-114.071948696696","human_address":"{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"},"unique_key":"2018200704963"},{"roll_year":"2018","roll_number":"200747392","address":"251 99 ARBOUR LAKE RD NW","assessed_value":"132500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"132500","comm_code":"ARB","comm_name":"ARBOUR LAKE","unique_key":"2018200747392"},{"roll_year":"2018","roll_number":"200968139","address":"2023 20 AV SW","assessed_value":"1230000","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"1230000","comm_code":"RIC","comm_name":"RICHMOND","latitude":"51.0352023442902","longitude":"-114.107596255753","location":{"latitude":"51.0352023442902","longitude":"-114.107596255753","human_address":"{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"},"unique_key":"2018200968139"},{"roll_year":"2018","roll_number":"201078334","address":"466 1101 84 ST NE","assessed_value":"135500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"135500","comm_code":"09O","comm_name":"RESIDUAL WARD 9 - SUB AREA 9O","unique_key":"2018201078334"},{"roll_year":"2018","roll_number":"201026267","address":"273 99 ARBOUR LAKE RD NW","assessed_value":"147500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"147500","comm_code":"ARB","comm_name":"ARBOUR LAKE","unique_key":"2018201026267"},{"roll_year":"2018","roll_number":"201076015","address":"460 3223 83  ST NW","assessed_value":"129500","assessment_class":"RE","assessment_class_description":"Residential","re_assessed_value":"129500","comm_code":"GRE","comm_name":"GREENWOOD/GREENBRIAR","unique_key":"2018201076015"}]

// console.log(R.pluck('comm_name', data));
// console.log(R.find(R.propEq('comm_name', 'WEST SPRINGS'))(data));
// console.log(data.length)

// const reduction =
//     R.reduceBy((acc, next) => acc + next.assessed_value, 0, (x) => x.comm_code, data);

// console.log(JSON.stringify(reduction, undefined, 2));

// const avgValueByComm = R.pipe(
//   R.groupBy(R.prop('comm_code')),
//   R.map(R.pluck('assessed_value'),
//   R.map(R.median))
// )(data);

// console.log(avgValueByComm)

const byComm = R.groupBy(R.prop('comm_code'))(data);
// console.log(byComm)

const assVal = R.map(R.pluck('assessed_value'))(byComm);
// console.log(assVal)

// const midAssVal = R.map(R.median)(assVal);
// console.log(midAssVal)

const maxAssVal = R.map(R.maxBy(assVal));
console.log(maxAssVal)