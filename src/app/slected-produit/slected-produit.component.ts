import { Component, OnInit } from '@angular/core';
import { produit } from '../produit';
import {ActivatedRoute, Router} from '@angular/router';
import { ProduitService } from '../produit.service';
@Component({
  selector: 'app-slected-produit',
  templateUrl: './slected-produit.component.html',
  styleUrls: ['./slected-produit.component.css']
})
export class SlectedProduitComponent implements OnInit {
  mat:number;
  p: produit;
  constructor(private activatedRouter:ActivatedRoute,private produitService:ProduitService,private router:Router) {
    
    
   }

  ngOnInit() {
    let mat= Number(this.activatedRouter.snapshot.params['id']);
    this.p = this.produitService.getProduitId(mat);
    
  
   
    }

}
