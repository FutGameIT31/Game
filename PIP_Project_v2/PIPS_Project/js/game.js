/*Генератор начало*/
var horz = [0,0,0,1,1,1,0,0,0];
var vert = [0,1,0,0,1,0,0,1,0];
var bok32 = [0,0,0,0,1,1,0,1,0];
var bok12 = [0,0,0,1,1,0,0,1,0];
var bok23 = [0,1,0,1,1,0,0,0,0];
var bok21 = [0,1,0,0,1,1,0,0,0];

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var generator = function()
{
	var pol = [];
	for(var i = 0;i < 10;i++)
	{
		pol.push([]);
		for( var j = 0; j < 10; j++) 
		{
			pol[i].push([0,0,0,0,0,0,0,0,0]);
		}
	}

	pol[0][0] = [0,0,0,0,1,1,0,0,0];
	var i = 1;
	var j = 0;
	var j1  = 0;
	var i1 = 0;
	var chp = 2;
	while((i != 9) || (j != 9))
	{
		if((i != 9) && (j != 9) && (j != 0))
		{
		if (chp == 1)
		{
			ch = getRandomInt(1,2);
		} else if(chp == 2)
		{
			ch = getRandomInt(1,3);

		} else if(chp == 3)
		{
			ch = getRandomInt(2,3);
		}
		} else if(i == 9)
		{
			ch = 1;
		} else if(j == 9)
		{
			if(chp == 3)
			{
				ch = 2;
			} else
			{
				ch = getRandomInt(2,3);
			}

		} else if(j == 0)
		{
		if (chp != 3)
		{
			ch = getRandomInt(1,2);
		} else
		{
			ch = 2;
		}
		}
		switch(ch) 
		{
			case 1:
				j1 = j + 1;
				i1 = i;
			break;
			case 2:
				j1 = j;
				i1 = i + 1;
			break;
			case 3:
				j1 = j - 1;
				i1 = i;
			break;
		}
		if((chp == 1 && ch == 1)||(chp == 3 && ch == 3))
		{
			pol[i][j] = horz;
		} else if((chp == 2 && ch == 2))
		{
			pol[i][j] = vert;
		} else if((chp == 1)&&(ch == 2))
		{
			pol[i][j] = bok12;
		} else if((chp == 2)&&(ch == 1))
		{
			pol[i][j] = bok21;
		} else if((chp == 3)&&(ch == 2))
		{
			pol[i][j] = bok32;
		} else if((chp == 2)&&(ch == 3))
		{
			pol[i][j] = bok23;
		}
		i = i1;
		j = j1;
		chp = ch;
	}
	return pol;	
}
/*Генератор конец*/


/*Повороты Трубы*/
$(document).ready(function(){
	$(".point").click(function(){
		var rotation = $(this).data('rotation')*1;
		$(this).find('.pipe').removeClass('rotation-'+rotation);
		rotation += 1;
		if (rotation > 4) rotation = 1;
		$(this).data('rotation', rotation);
		$(this).find('.pipe').addClass('rotation-'+rotation);
	});
})
/*Повороты Трубы конец*/
