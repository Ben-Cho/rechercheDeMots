var grille = new Array();

window.onload = function() {

	

	for(var i=0; i<186; i++)
	   grille[i] = new Array();

	initGrille();	
	

	var str = "<table>";
	for(var i=0; i<186; i++)
	{
			str += "<tr>";
		    str += "<td class='gauche'>"
		    str += grille[i][0]+"&nbsp;&nbsp;";
		    str += "</td>"
		    str += "<td class='droite'>"
		    str += "&nbsp;&nbsp;"+grille[i][1];
		    str += "</tdtr>"
			str += "</>";
	}
	str += "</str>"

	document.getElementById("tabl").innerHTML = str;
}

function myFunction() {
	var str = "<table>";
	if (document.getElementById("input").value == "") {
		var str = "<table>";
		for(var i=0; i<186; i++)
		{
			str += "<tr>";
		    str += "<td class='gauche'>"
		    str += grille[i][0]+"&nbsp;&nbsp;";
		    str += "</td>"
		    str += "<td class='droite'>"
		    str += "&nbsp;&nbsp;"+grille[i][1];
		    str += "</td>"
			str += "</tr>";
		}
		str += "</str>"
	} else {
		for(var i=0; i<186; i++)
		{
			if(document.getElementById("input").value == grille[i][0].substr(0,document.getElementById("input").value.length))
			{
				str += "<tr>";
			    str += "<td class='gauche'>"
			    str += grille[i][0]+"&nbsp;&nbsp;";
			    str += "</td>"
			    str += "<td class='droite'>"
			    str += "&nbsp;&nbsp;"+grille[i][1];
			    str += "</td>"
				str += "</tr>";
			}
		}
		str += "</str>";
	}
	document.getElementById("tabl").innerHTML = str;
}

function initGrille() {
	grille[0][0]="(senior) executive";
grille[0][1]="cadre (supérieur)";

grille[1][0]="(to) probe";
grille[1][1]="sonde (r)";

grille[2][0]="(trade) union";
grille[2][1]="syndicat";

grille[3][0]="account manager";
grille[3][1]="responsable comptable";

grille[4][0]="achievement";
grille[4][1]="réalisation (positive)";

grille[5][0]="advanced material";
grille[5][1]="matériaux nouveau";

grille[6][0]="advocacy";
grille[6][1]="plaidoyer (favorable)";

grille[7][0]="advocate";
grille[7][1]="défenseur";

grille[8][0]="alternating";
grille[8][1]="alternatif (courant)";

grille[9][0]="application";
grille[9][1]="candidature";

grille[10][0]="automation";
grille[10][1]="id./robotisation";

grille[11][0]="availability";
grille[11][1]="disponibilité";

grille[12][0]="award";
grille[12][1]="récompense";

grille[13][0]="bonus";
grille[13][1]="prime";

grille[14][0]="breakdown";
grille[14][1]="panne";

grille[15][0]="cashflow";
grille[15][1]="liquidités/trésorerie";

grille[16][0]="cell ";
grille[16][1]="cellule";

grille[17][0]="consumption";
grille[17][1]="consommation ";

grille[18][0]="contractor";
grille[18][1]="entrepreneur";

grille[19][0]="conveyor";
grille[19][1]="chaine/convoyeur";

grille[20][0]="cost saving ";
grille[20][1]="économique";

grille[21][0]="court ruling";
grille[21][1]="décision de justice";

grille[22][0]="criminal record";
grille[22][1]="casier judiciaire";

grille[23][0]="designer ";
grille[23][1]="créateur/concepteur";

grille[24][0]="directorship";
grille[24][1]="poste de direction";

grille[25][0]="discount";
grille[25][1]="réduction ";

grille[26][0]="display";
grille[26][1]="affichage";

grille[27][0]="dispute";
grille[27][1]="conflit";

grille[28][0]="dramatic";
grille[28][1]="extraordinaire";

grille[29][0]="electrical power";
grille[29][1]="puissance électrique";

grille[30][0]="family allowances";
grille[30][1]="allocations familliales";

grille[31][0]="faulty";
grille[31][1]="défectueux";

grille[32][0]="feasible";
grille[32][1]="réalisable";

grille[33][0]="feature";
grille[33][1]="caractéristique";

grille[34][0]="findings";
grille[34][1]="résultats";

grille[35][0]="fixed-term contract";
grille[35][1]="CDD";

grille[36][0]="foreman";
grille[36][1]="chef de travaux";

grille[37][0]="forklift truck";
grille[37][1]="clark/Fenwick";

grille[38][0]="funding";
grille[38][1]="financement";

grille[39][0]="golden handshake";
grille[39][1]="prime de départ en retraite";

grille[40][0]="head office";
grille[40][1]="siège social";

grille[41][0]="high/low end";
grille[41][1]="haut/bas de gamme";

grille[42][0]="horsepower ";
grille[42][1]="puissance";

grille[43][0]="ignition";
grille[43][1]="allumage";

grille[44][0]="income";
grille[44][1]="revenu";

grille[45][0]="industrial accident";
grille[45][1]="accident du travail";

grille[46][0]="informative";
grille[46][1]="instructif";

grille[47][0]="interpersonal skills   ";
grille[47][1]="capacités de communication ";

grille[48][0]="junior executive";
grille[48][1]="jeune cadre";

grille[49][0]="labour unrest";
grille[49][1]="agitation ouvrière";

grille[50][0]="lead times";
grille[50][1]="temps d'exécution";

grille[51][0]="leak";
grille[51][1]="fuite";

grille[52][0]="liability";
grille[52][1]="responsabilité légale   ";

grille[53][0]="libelling";
grille[53][1]="diffamation";

grille[54][0]="live";
grille[54][1]="sous tension (fil élec.)";

grille[55][0]="long-range";
grille[55][1]="à long terme";

grille[56][0]="long-term contract";
grille[56][1]="CDI";

grille[57][0]="management";
grille[57][1]="direction/patronat";

grille[58][0]="managerial";
grille[58][1]="cadre (adj.)";

grille[59][0]="manufacturing";
grille[59][1]="fabrication";

grille[60][0]="marketable";
grille[60][1]="commercialisable";

grille[61][0]="merger";
grille[61][1]="fusion (de sociétés)";

grille[62][0]="moonlighting";
grille[62][1]="travail au noir";

grille[63][0]="notice";
grille[63][1]="préavis";

grille[64][0]="opponent";
grille[64][1]="adversaire/opposant";

grille[65][0]="outcome";
grille[65][1]="issue (résultat)";

grille[66][0]="output";
grille[66][1]="production (brute)";

grille[67][0]="overflow";
grille[67][1]="trop plein";

grille[68][0]="overheads";
grille[68][1]="frais généraux";

grille[69][0]="overtime";
grille[69][1]="heures suplémentaires";

grille[70][0]="overview";
grille[70][1]="vue d' ensemble";

grille[71][0]="PAYE (Pay As You Earn)";
grille[71][1]="Retenue à la source";

grille[72][0]="payload";
grille[72][1]="charge utile";

grille[73][0]="perk   ";
grille[73][1]="avantage en nature ";

grille[74][0]="personnel";
grille[74][1]="id. (complet)";

grille[75][0]="plant";
grille[75][1]="usine";

grille[76][0]="police record";
grille[76][1]="casier judiciaire";

grille[77][0]="power";
grille[77][1]="courant (élec.)";

grille[78][0]="profit sharing";
grille[78][1]="intéressement";

grille[79][0]="promotion";
grille[79][1]="id.";

grille[80][0]="proponent";
grille[80][1]="partisan";

grille[81][0]="prospects";
grille[81][1]="perspectives";

grille[82][0]="range";
grille[82][1]="gamme";

grille[83][0]="red tape (paperwork)";
grille[83][1]="paperasse";

grille[84][0]="redundant";
grille[84][1]="au chomage";

grille[85][0]="reliable";
grille[85][1]="fiable";

grille[86][0]="requirement/need";
grille[86][1]="exigence/besoin ";

grille[87][0]="retail ";
grille[87][1]="détail (commerce) ";

grille[88][0]="retirement pension";
grille[88][1]="retraite (argent)";

grille[89][0]="safe";
grille[89][1]="sûr (physique) ";

grille[90][0]="salary";
grille[90][1]="salaire (mensuel/annuel)";

grille[91][0]="savings";
grille[91][1]="économies";

grille[92][0]="corrugated iron";
grille[92][1]="tôle ondulée";

grille[93][0]="schedule";
grille[93][1]="programme";

grille[94][0]="scope";
grille[94][1]="étendue/champ";

grille[95][0]="screening";
grille[95][1]="sélection";

grille[96][0]="secure";
grille[96][1]="sûr (sans problème)";

grille[97][0]="share ";
grille[97][1]="action";

grille[98][0]="shareholder   ";
grille[98][1]="actionnaire";

grille[99][0]="shield";
grille[99][1]="écran/bouclier ";

grille[100][0]="shift";
grille[100][1]="poste (= 8 heures)";

grille[101][0]="shift work";
grille[101][1]="travail par poste";

grille[102][0]="shop";
grille[102][1]="atelier";

grille[103][0]="shop floor  ";
grille[103][1]="atelier (opp. bureaux)";

grille[104][0]="shop steward";
grille[104][1]="délégué syndical";

grille[105][0]="shortage";
grille[105][1]="pénurie";

grille[106][0]="sick leave";
grille[106][1]="arrêt/congé maladie";

grille[107][0]="skilled machinist";
grille[107][1]="ouvrier qualifié";

grille[108][0]="slowdown/go-slow";
grille[108][1]="grève perlée";

grille[109][0]="spark plug";
grille[109][1]="bougie";

grille[110][0]="spin-off";
grille[110][1]="retombée (économique)";

grille[111][0]="staff";
grille[111][1]="personnel (cadres)";

grille[112][0]="stock/inventory control";
grille[112][1]="gestion des stocks";

grille[113][0]="strike record   ";
grille[113][1]="chiffre des grèves";

grille[114][0]="subsidiary";
grille[114][1]="filiale";

grille[115][0]="superannuation fund ";
grille[115][1]="caisse des retraites complémentaires";

grille[116][0]="supplier";
grille[116][1]="fournisseur";

grille[117][0]="surge capacity";
grille[117][1]="pics de production";

grille[118][0]="survey";
grille[118][1]="sondage/enquète";

grille[119][0]="tailored/tailor made";
grille[119][1]="sur mesure ";

grille[120][0]="takeover bid";
grille[120][1]="OPA";

grille[121][0]="template";
grille[121][1]="gabarit";

grille[122][0]="tender";
grille[122][1]="appel d' offres";

grille[123][0]="the accounts";
grille[123][1]="la comptabilité";

grille[124][0]="tip";
grille[124][1]="un tuyau (idée)              ";

grille[125][0]="tip  ";
grille[125][1]="information";

grille[126][0]="to accommodate";
grille[126][1]="accueillir";

grille[127][0]="to achieve";
grille[127][1]="mener à bien";

grille[128][0]="to allow for";
grille[128][1]="prendre en considération";

grille[129][0]="to boom";
grille[129][1]="être en plein essor";

grille[130][0]="to buy in ";
grille[130][1]="stocker";

grille[131][0]="to buy out";
grille[131][1]="racheter (société)";

grille[132][0]="to capitalize on";
grille[132][1]="tirer parti de";

grille[133][0]="to carry out";
grille[133][1]="exécuter";

grille[134][0]="to clock in";
grille[134][1]="pointer";

grille[135][0]="to cut down";
grille[135][1]="diminuer ";

grille[136][0]="to demote";
grille[136][1]="rétrograder";

grille[137][0]="to drive up";
grille[137][1]="faire augmenter";

grille[138][0]="to fire";
grille[138][1]="limoger/virer";

grille[139][0]="to grade";
grille[139][1]="évaluer";

grille[140][0]="to handle";
grille[140][1]="manipuler";

grille[141][0]="to hire";
grille[141][1]="embaucher";

grille[142][0]="to launch";
grille[142][1]="lancer (1 produit)";

grille[143][0]="to lay off   ";
grille[143][1]="licencier";

grille[144][0]="to make a living";
grille[144][1]="vivre (s' en sortir)";

grille[145][0]="to meet the  needs";
grille[145][1]="satisfaire les besoins";

grille[146][0]="to monitor";
grille[146][1]="surveiller/contrôler ";

grille[147][0]="to operate";
grille[147][1]="(faire)fonctionner ";

grille[148][0]="to overcome";
grille[148][1]="venir à bout de";

grille[149][0]="to pledge";
grille[149][1]="s'engager (à ...)   ";

grille[150][0]="to process";
grille[150][1]="traiter";

grille[151][0]="to publicize";
grille[151][1]="rendre public";

grille[152][0]="to resign";
grille[152][1]="démissionner ";

grille[153][0]="to resume work ";
grille[153][1]="reprendre le travail";

grille[154][0]="to scan";
grille[154][1]="scruter";

grille[155][0]="to seal  ";
grille[155][1]="fermer hermétiquement/sceller/étanchéifier";

grille[156][0]="to set up";
grille[156][1]="créer/monter (affaire)";

grille[157][0]="to take legal action";
grille[157][1]="intenter 1 action en justice";

grille[158][0]="to take over";
grille[158][1]="faire une OPA";

grille[159][0]="to testify";
grille[159][1]="témoigner";

grille[160][0]="to troubleshoot  ";
grille[160][1]="trouver la panne";

grille[161][0]="to urge";
grille[161][1]="préconiser";

grille[162][0]="to walk out";
grille[162][1]="débrayer (faire grève)";

grille[163][0]="to weld";
grille[163][1]="souder (arc)";

grille[164][0]="trade";
grille[164][1]="commerce";

grille[165][0]="turnkey solution";
grille[165][1]="solution toute prête ";

grille[166][0]="turnover";
grille[166][1]="chiffre d'affaires";

grille[167][0]="underpaid";
grille[167][1]="sous-payé";

grille[168][0]="underway";
grille[168][1]="en cours";

grille[169][0]="unemployment benefit";
grille[169][1]="allocations chômage";

grille[170][0]="unrest";
grille[170][1]="agitation";

grille[171][0]="unskilled";
grille[171][1]="non qualifié";

grille[172][0]="wage";
grille[172][1]="salaire (quotidien/hebdo/etc)";

grille[173][0]="wage costs";
grille[173][1]="charges sociales";

grille[174][0]="wage dispute";
grille[174][1]="conflit salarial ";

grille[175][0]="wage freeze";
grille[175][1]="blocage des salaires ";

grille[176][0]="warehouse";
grille[176][1]="entrepôt";

grille[177][0]="wild cat strike";
grille[177][1]="grève sauvage";

grille[178][0]="wildcat strike";
grille[178][1]="grève sauvage";

grille[179][0]="wire      ";
grille[179][1]="fil électrique";

grille[180][0]="working hours";
grille[180][1]="durée du travail";

grille[181][0]="workload";
grille[181][1]="charge de travail";

grille[182][0]="workpiece     ";
grille[182][1]="piéce";

grille[183][0]="works council";
grille[183][1]="comité d' entreprise";

grille[184][0]="workstation";
grille[184][1]="poste de travail";

grille[185][0]="wrongful discharge";
grille[185][1]="licenciement abusif ";
}