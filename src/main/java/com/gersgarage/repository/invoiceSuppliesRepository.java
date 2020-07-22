package com.gersgarage.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gersgarage.model.invoice_supplies;

@Repository
public interface invoiceSuppliesRepository extends JpaRepository <invoice_supplies, Long>{

}
