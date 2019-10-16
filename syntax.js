function syn(conid, uriid)
{
	if (conid == "" || uriid == "")
	{
		location.reload(true);
	}
	
	const hmdy = "%26k%3Dhy%26ref_%3D";

	var syn_uri = uriid.slice(0, uriid.indexOf("*")) + conid + hmdy + uriid.slice(uriid.indexOf("pe"), uriid.length);
	
	document.getElementById("linfo").innerHTML = "Encoded URI : " + "<br />" + "<br />" + syn_uri;
	
	// var uri_enc = encodeURIComponent(uri);
	var uri_dec = decodeURIComponent(syn_uri);

	document.getElementById("uri_dec").innerHTML = "Decoded URI : " + "<br />" + "<br />" + uri_dec;
	
}